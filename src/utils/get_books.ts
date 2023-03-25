import { prisma } from '@/lib/prisma'

export async function getBooks(session: any, categoryId?: string) {
  const booksQuery = categoryId
    ? await prisma.$queryRaw`
        SELECT B.name,B.id, B.author, B.cover_url, (SUM(R.rate)/COUNT(R.id)) as total_rate
        FROM books B

        LEFT JOIN ratings R ON R.book_id = B.id
        INNER JOIN categories_books COB ON B.id = COB.book_id
        INNER JOIN categories C ON COB.category_id = C.id

        WHERE C.id = ${categoryId}

        GROUP BY B.id
        ORDER BY SUM(R.rate) DESC
      `
    : await prisma.$queryRaw`
        SELECT B.name,B.id, B.author, B.cover_url, (SUM(R.rate)/COUNT(R.id)) as total_rate
        FROM books B

        LEFT JOIN ratings R ON R.book_id = B.id

        GROUP BY B.id
        ORDER BY SUM(R.rate) DESC
      `

  const books = JSON.parse(
    JSON.stringify(booksQuery, (_, v) =>
      typeof v === 'bigint' ? Number(v.toString()) : v
    )
  )

  if (session?.user?.id) {
    const booksRead = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user: {
              id: session?.user?.id,
            },
          },
        },
      },
    })

    return books.map((book: any) => {
      if (booksRead.find((b) => b.id === book.id)) {
        return { ...book, read: true }
      }
      return book
    })
  }
  return books
}
