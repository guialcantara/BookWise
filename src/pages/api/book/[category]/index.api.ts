// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getBooks } from '@/utils/get_books'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '../../../../lib/prisma'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const session = await getSession({ req })

  const categoryId = String(req.query.category)

  if (!categoryId) {
    return res.status(400).end()
  }

  const result = await getBooks(
    session,
    categoryId === 'all' ? '' : categoryId
  )
  return res.status(200).json({ books: result })
}
