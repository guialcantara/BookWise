import dayjs from 'dayjs'
import { Avatar } from '../Avatar'
import { StarRating } from '../StarRating'
import { RatingContainer, RatingHeader, UserInformation } from './styles'

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

export function RatingCard({ description, rate, created_at, user }: Rating) {
  return (
    <RatingContainer>
      <RatingHeader>
        <UserInformation>
          <Avatar src={user.image} />
          <div>
            <h4>{user.name}</h4>
            <span>Há {dayjs(created_at).fromNow(true)}</span>
          </div>
        </UserInformation>
        <StarRating rating={rate} />
      </RatingHeader>
      <p>{description}</p>
    </RatingContainer>
  )
}
