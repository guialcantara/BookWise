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

  const id = String(req.query.id)

  if (!id) {
    return res.status(400)
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

  const sanitizedRatings = JSON.parse(
    JSON.stringify(ratings, (_, v) =>
      typeof v === 'bigint' ? Number(v.toString()) : v
    )
  )

  return res.status(200).json({ ratings: sanitizedRatings, userData: {} })
}
