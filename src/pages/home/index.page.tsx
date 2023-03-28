import { Card } from '@/components/Card'
import { EmptyCard } from '@/components/EmptyCard'
import { PageTitle } from '@/components/PageTitle'
import Layout from '@/layouts'
import { prisma } from '@/lib/prisma'
import { serializeFields } from '@/utils/serialize'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app.page'
import {
  HomeContainer,
  ListHeader,
  PopularBooks,
  RecentRatesList,
} from './styles'

interface HomeProps {
  lastRates: Rating[]
  popularBooks: PopularBook[]
  lastReading: any
}

interface Rating {
  created_at: string
  id: string
  rate: number
  user: {
    image: string
    name: string
  }
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

interface PopularBook {
  id: string
  name: string
  author: string
  total_rate: number
  rate_amount: number
  cover_url: string
}

const Home: NextPageWithLayout<HomeProps> = ({
  lastRates,
  popularBooks,
  lastReading,
}: HomeProps) => {
  const { data } = useSession()
  return (
    <HomeContainer>
      <div>
        <PageTitle>
          <ChartLineUp size={32} />
          <h2> Início </h2>
        </PageTitle>

        {lastReading && (
          <div>
            <ListHeader>
              <p>Sua última leitura</p>
              <Link href={`profile/${data?.user.id}`}>
                ver todos
                <CaretRight size={16} />
              </Link>
            </ListHeader>

            <Card.Root
              book={lastReading.book}
              user={lastReading.user}
              rating={{
                rate: lastReading.rate,
                created_at: lastReading.created_at,
              }}
            >
              <Card.Content withRating />
            </Card.Root>
          </div>
        )}

        <RecentRatesList>
          <p>Avaliações mais recentes</p>
          {lastRates.length === 0 && <EmptyCard />}
          {lastRates.map((rating: Rating) => (
            <Card.Root
              book={rating.book}
              user={rating.user}
              rating={{ rate: rating.rate, created_at: rating.created_at }}
              key={rating.id}
            >
              <Card.Header />
              <Card.Content />
            </Card.Root>
          ))}
        </RecentRatesList>
      </div>
      <PopularBooks>
        <ListHeader>
          <p>Livros Populares</p>
          <Link href="/explore">
            ver todos
            <CaretRight size={16} />
          </Link>
        </ListHeader>
        {popularBooks.map((popularBook: PopularBook) => (
          <Card.Root
            key={popularBook.id}
            book={{
              id: popularBook.id,
              name: popularBook.name,
              author: popularBook.author,
              cover_url: popularBook.cover_url,
              summary: '',
            }}
            rating={{
              total_rate: popularBook.total_rate,
              rate_amount: popularBook.rate_amount,
            }}
          >
            <Card.SimpleContent imageWidth={64} imageHeight={94} />
          </Card.Root>
        ))}
      </PopularBooks>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  req,
  res,
}) {
  const session = await getSession({ req })

  const lastRates = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 3,
  })

  const popularBooks = await prisma.$queryRaw`
    SELECT 
      B.name,
      B.id,
      B.author,
      B.cover_url,
      (SUM(R.rate)/COUNT(R.id)) as total_rate, 
      COUNT(R.id) as rate_amount
    FROM books B
    LEFT JOIN ratings R ON B.id = R.book_id
    GROUP BY B.id
    ORDER BY COALESCE(SUM(R.rate), 0) DESC
  `

  const lastReading = await prisma.rating.findFirst({
    include: {
      book: true,
      user: {
        include: {
          ratings: {
            where: {
              user: {
                id: session?.user?.id,
              },
            },
          },
        },
      },
    },
    where: {
    user_id:  session?.user?.id,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return {
    props: {
      lastRates: serializeFields(lastRates),
      lastReading: session?.user ?serializeFields(lastReading):null,
      popularBooks: serializeFields(popularBooks),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
