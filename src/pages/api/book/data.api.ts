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

  const { bookId } = req.query

  if (!bookId) {
    return res.status(400).end()
  }

  const book: any = await prisma.$queryRaw`
    SELECT 
    B.name,
    B.id,
    B.total_pages,
    B.author, 
    B.cover_url, 
    (SUM(R.rate)/COUNT(R.id)) as total_rate, 
    COUNT(R.id) rate_amount
    FROM books B

    LEFT JOIN ratings R ON R.book_id = B.id

    WHERE B.id = ${String(bookId)}
    GROUP BY B.id
    ORDER BY SUM(R.rate) DESC
`

  const categories = await prisma.categoriesOnBooks.findMany({
    include: {
      category: true,
    },
    where: {
      book_id: String(bookId),
    },
  })
  const bookCategories = categories
    .map((categoryObj) => categoryObj.category.name)
    .join(', ')

  const bookInformation = serializeFields(book)

  const ratings = await prisma.rating.findMany({
    select: {
      description: true,
      rate: true,
      created_at: true,
      user: {
        select: {
          email: true,
          image: true,
          name: true,
        },
      },
    },
    where: {
      book_id: String(bookId),
    },
    orderBy: {
      created_at: 'desc',
    },
  })
  return res
    .status(200)
    .json({ information: { ...bookInformation[0], bookCategories }, ratings })
}
