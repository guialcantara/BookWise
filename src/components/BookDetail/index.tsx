import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { X } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { Card } from '../Card'
import { CreateRatingCard } from '../CreateRatingCard'
import { RatingCard } from './RatingCard'
import {
  BookDetailContent,
  BookDetailOverlay,
  RatingList,
  RatingListContent,
  RatingListHeader,
} from './styles'

interface BookDetailProps {
  bookId: string
  closeFunction: () => void
  updateList?: () => void
}

interface Book {
  name: string
  id: string
  author: string
  summary: string
  bookCategories: string
  cover_url: string
  total_rate: number
  rate_amount: number
}

interface Rating {
  description: string
  rate: number
  created_at: string
  user: {
    email: string
    image: string
    name: string
  }
}

export const BookDetail = ({
  bookId,
  closeFunction,
  updateList,
}: BookDetailProps) => {
  const [bookInformation, setBookInformation] = useState<Book>({} as Book)
  const [ratings, setRatings] = useState<Rating[]>([])
  const [showRatingForm, setShowRatingForm] = useState(false)
  const { status } = useSession()
  const getBookData = useCallback(
    async (update: boolean) => {
      const result = await api.get('/book/data', {
        params: {
          bookId,
        },
      })
      const { information, ratings } = result.data

      setRatings(ratings)
      setBookInformation(information)
      if (update && updateList) updateList()
    },
    [bookId, updateList]
  )

  useEffect(() => {
    getBookData(false)
  }, [bookId, getBookData])

  return (
    <BookDetailOverlay>
      <BookDetailContent>
        <X weight="fill" size={24} onClick={closeFunction} />
        <Card.Root
          book={{ ...bookInformation }}
          rating={{
            total_rate: bookInformation.total_rate,
            rate_amount: bookInformation.rate_amount,
          }}
        >
          <Card.SimpleContent showAmount imageWidth={172} imageHeight={242} />
          <Card.Footer />
        </Card.Root>
        <RatingList>
          <RatingListHeader>
            <p>Avaliações</p>
            {status === 'authenticated' && (
              <button onClick={() => setShowRatingForm(true)}>Avaliar</button>
            )}
          </RatingListHeader>

          <RatingListContent>
            {showRatingForm && (
              <CreateRatingCard
                bookId={bookInformation.id}
                closeFunction={() => setShowRatingForm(false)}
                updateList={() => getBookData(true)}
              />
            )}
            {ratings.map((rating, i) => (
              <RatingCard {...rating} key={i} />
            ))}
          </RatingListContent>
        </RatingList>
      </BookDetailContent>
    </BookDetailOverlay>
  )
}
