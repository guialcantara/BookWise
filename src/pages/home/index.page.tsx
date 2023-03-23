import { PageTitle } from '@/components/commons/PageTitle'
import { RatingCard } from '@/components/modules/home/RatingCard'
import { Content } from '@/components/modules/home/RatingCard/Content'
import { SimpleCard } from '@/components/commons/SimpleCard'
import Layout from '@/layouts'
import { prisma } from '@/lib/prisma'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app.page'
import {
  Card,
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
  console.log(lastReading)
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
              <Link href="/profile">
                ver todos
                <CaretRight size={16} />
              </Link>
            </ListHeader>

            <Card>
              <Content rating={{ ...lastReading, withDate: true }} />
            </Card>
          </div>
        )}

        <RecentRatesList>
          <p>Avaliações mais recentes</p>
          {lastRates.map((rating: Rating) => (
            <RatingCard rating={rating} key={rating.id} />
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
          <SimpleCard key={popularBook.id} {...popularBook} />
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
  })

  const popularBooks = await prisma.$queryRaw`
    SELECT B.name,B.author,B.cover_url, (SUM(R.rate)/COUNT(R.id)) as total_rate, R.id
    FROM books B

    LEFT JOIN ratings R ON B.id = R.book_id

    GROUP BY B.id, R.id
    ORDER BY SUM(R.rate) DESC
  `
  const lastReading = await prisma.rating.findFirst({
    include: {
      book: true,
    },
    where: {
      user: {
        email: session?.user?.email,
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return {
    props: {
      lastRates: JSON.parse(JSON.stringify(lastRates)),
      lastReading: JSON.parse(JSON.stringify(lastReading)),
      popularBooks: JSON.parse(
        JSON.stringify(popularBooks, (_, v) =>
          typeof v === 'bigint' ? Number(v.toString()) : v
        )
      ),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
