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

  const { bookId, id, description, rate } = req.body

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  const alreadyExistRating = await prisma.rating.findFirst({
    where: {
      book_id: bookId,
      user_id: id,
    },
  })
  if (user && !alreadyExistRating) {
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
  }else{
    res.status(400).json({message: "Você ja avaliou esse Livro!"})
  }

  return res.status(500)
}
