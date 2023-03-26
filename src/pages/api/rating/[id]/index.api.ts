// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import { serializeFields } from '@/utils/serialize'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const id = String(req.query.id)

  if (!id) {
    return res.status(400)
  }
  console.log(id)
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })
  if (!user) {
    return res.status(400).json({ message: 'Usuario não encontrado!' })
  }

  const userReadPages = await prisma.$queryRaw`
    SELECT 
      SUM(B.total_pages) as read_pages, 
      COUNT(B.id) as rated_books,
      COUNT(DISTINCT B.author) as total_authors
    FROM ratings R
    INNER join books B  ON B.id = R.book_id
    WHERE R.user_id = ${id}
  `
  const userFavoriteCategory = await prisma.$queryRaw`
    SELECT C.name
    FROM ratings R
    INNER join books B  ON B.id = R.book_id
    INNER join categories_books CB  ON CB.book_id = B.id
    INNER join categories C  ON C.id = CB.category_id
    WHERE R.user_id = ${id}
    GROUP BY C.name
    ORDER BY COUNT(C.name) desc
    LIMIT 1
  `
  const serializedReadPages = serializeFields(userReadPages)[0]
  
  const userData = {
    readPages: serializedReadPages.read_pages,
    ratedBooks: serializedReadPages.rated_books,
    totalAuthors: serializedReadPages.total_authors,
    favoriteCategory: serializeFields(userFavoriteCategory)[0].name,
    name: user.name,
    image: user.image,
    created_at: user.created_at,
  }

  const ratings = await prisma.rating.findMany({
    include: {
      book: true,
      user: {
        select: {
          image: true,
          name: true,
        },
      },
    },
    where: {
      user_id: id,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  const serializedRatings = serializeFields(ratings)

  return res.status(200).json({ ratings: serializedRatings, userData })
}
