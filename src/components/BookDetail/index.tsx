import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { Check, X } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { Avatar } from '../Avatar'
import { CreateRatingCard } from '../CreateRatingCard'
import { InputStarRating } from '../InputStarRating'
import { SimpleCard } from '../SimpleCard'
import { StarRating } from '../StarRating'
import { RatingCard } from './RatingCard'
import {
  BookDetailContent,
  BookDetailOverlay,
  RatingButton,
  RatingContainer,
  RatingHeader,
  RatingList,
  RatingListContent,
  RatingListHeader,
  RatingTextareaContainer,
  UserInformation,
} from './styles'

interface BookDetailProps {
  bookId: string
  closeFunction: () => void
}

interface Book {
  name: string
  id: string
  author: string
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

export const BookDetail = ({ bookId, closeFunction }: BookDetailProps) => {
  const [bookInformation, setBookInformation] = useState<Book>({} as Book)
  const [ratings, setRatings] = useState<Rating[]>([])
  const [showRatingForm, setShowRatingForm] = useState(false)
  const { status } = useSession()
  const getBookData = useCallback(async () => {
    const result = await api.get('/book/data', {
      params: {
        bookId,
      },
    })
    const { information, ratings } = result.data

    setRatings(ratings)
    setBookInformation(information[0])
  }, [bookId])

  useEffect(() => {
    getBookData()
  }, [bookId, getBookData])

  return (
    <BookDetailOverlay>
      <BookDetailContent>
        <X weight="fill" size={24} onClick={closeFunction} />
        <SimpleCard imageHeight={242} imageWidth={172} {...bookInformation} />
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
                updateList={getBookData}
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
