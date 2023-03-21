import dayjs from 'dayjs'
import Image from 'next/image'
import { Star, StarHalf } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { StarRating } from '../StarRating'
import { Card, CardContent, CardHeader, ProfileSection } from './styles'

interface RatingCardProps {
  rating: {
    id: string
    rate: number
    created_at: string
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
}

export function RatingCard({ rating }: RatingCardProps) {
  return (
    <Card>
      <CardHeader>
        <ProfileSection>
          <Avatar src={rating.user.image} />
          <div>
            <p>{rating.user.name}</p>
            <span>Há {dayjs(rating.created_at).fromNow(true)}</span>
          </div>
        </ProfileSection>
        <StarRating rating={rating.rate} />
      </CardHeader>

      <CardContent>
        <Image
          src={`/${rating.book.cover_url}.png`}
          width={110}
          height={150}
          alt="user image"
        />
        <div>
          <p>{rating.book.name}</p>
          <span>{rating.book.author}</span>
          <p>{rating.book.summary}</p>
        </div>
      </CardContent>
    </Card>
  )
}
