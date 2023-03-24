import { api } from '@/lib/axios'
import { X } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { SimpleCard } from '../SimpleCard'
import {
  BookDetailContent,
  BookDetailOverlay
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

export const BookDetail = ({ bookId, closeFunction }: BookDetailProps) => {
  const [bookInformation, setBookInformation] = useState<Book>({} as Book)
  const [ratings, setRatings] = useState()

  const getBookData = useCallback(async () => {
    const result = await api.get('/book/data', {
      params: {
        bookId,
      },
    })
    const { information, ratings } = result.data
    setRatings(ratings)
    console.log(information[0])
    setBookInformation(information[0])
  }, [bookId])

  useEffect(() => {
    getBookData()
  }, [bookId, getBookData])

  return (
    <BookDetailOverlay>
      <BookDetailContent>
        <X weight="fill" size={24} onClick={closeFunction} />
        <SimpleCard imageHeight={242} imageWidth={172} {...bookInformation}/>
      </BookDetailContent>
    </BookDetailOverlay>
  )
}
