// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { bookId, email, description, rate } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    const rating = await prisma.rating.create({
      data: {
        book_id: bookId,
        user_id: user?.id,
        rate,
        description,
      },
    })
    if (rating) {
      return res.status(201).json({ rating })
    }
  }

  return res.status(500)
}
