import { RatingCard } from '@/components/RatingCard'
import Layout from '@/layouts'
import { prisma } from '@/lib/prisma'
import { GetServerSideProps } from 'next'
import { ChartLineUp, Star, StarHalf } from 'phosphor-react'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app.page'
import {
  HomeContainer,
  PageTitle,
  PopularBooks,
  RecentReviewsList,
} from './styles'

interface HomeProps {
  lastRates: Rating[]
  popularBooks: PopularBook[]
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
  rate: number
  cover_url: string
}

const Home: NextPageWithLayout<HomeProps> = ({
  lastRates,
  popularBooks,
}: HomeProps) => {
  console.log(popularBooks)
  return (
    <HomeContainer>
      <div>
        <PageTitle>
          <ChartLineUp size={32} />
          <h2> Início </h2>
        </PageTitle>

        <RecentReviewsList>
          <p>Avaliações mais recentes</p>
          {lastRates.map((rating: Rating) => (
            <RatingCard rating={rating} key={rating.id} />
          ))}
        </RecentReviewsList>
      </div>
      <PopularBooks>
        {popularBooks.map((popularBook: PopularBook) => (
          <li key={popularBook.id}>{popularBook.name}</li>
        ))}
      </PopularBooks>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  req,
  res,
}) {
  const lastRates = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: 'asc',
    },
  })
  const popularBooks = await prisma.$queryRaw`
    SELECT B.name,B.author,B.cover_url, SUM(R.rate) as total_rate, R.id
    FROM books B

    INNER JOIN ratings R ON B.id = R.book_id

    GROUP BY B.id
    ORDER BY SUM(R.rate) DESC
  `

  return {
    props: {
      lastRates: JSON.parse(JSON.stringify(lastRates)),
      popularBooks: JSON.parse(
        JSON.stringify(popularBooks, (_, v) =>
          typeof v === 'bigint' ? v.toString() : v
        )
      ),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
