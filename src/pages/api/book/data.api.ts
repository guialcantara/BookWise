// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
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

  const book = await prisma.$queryRaw`
  SELECT 
  B.name,
  B.id, 
  B.author, 
  B.cover_url, 
  (SUM(R.rate)/COUNT(R.id)) as total_rate, 
  COUNT(R.id) rate_amount
  FROM books B

  INNER JOIN categories_books COB ON B.id = COB.book_id
  INNER JOIN categories C ON COB.category_id = C.id
  LEFT JOIN ratings R ON R.book_id = B.id

  WHERE B.id = ${String(bookId)}

  GROUP BY B.id
  ORDER BY SUM(R.rate) DESC
`
  const bookInformation = JSON.parse(
    JSON.stringify(book, (_, v) =>
      typeof v === 'bigint' ? Number(v.toString()) : v
    )
  )

  const ratings = await prisma.rating.findMany({
    select: {
      user: {
        select: {
          email: true,
          image: true,
          name: true,
        },
      },
      description: true,
      rate: true,
    },

    where: {
      book_id: String(bookId),
    },
  })
  return res.status(200).json({ information: bookInformation, ratings })
}
