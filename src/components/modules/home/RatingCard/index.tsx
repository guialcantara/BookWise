import dayjs from 'dayjs'
import Image from 'next/image'
import { Star, StarHalf } from 'phosphor-react'
import { Avatar } from '../../../commons/Avatar'
import { StarRating } from '../../../commons/StarRating'
import { Content } from './Content'
import { Card, CardContent, CardHeader, ProfileSection } from './styles'

export interface RatingCardProps {
  rating: {
    id: string
    rate: number
    created_at: string
    withDate?: boolean,
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

      <Content rating={rating}  />
    </Card>
  )
}
