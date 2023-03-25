import { Avatar } from '@/components/Avatar'
import { StarRating } from '@/components/StarRating'
import dayjs from 'dayjs'
import { useCard } from '../useCard'
import { CardHeaderContainer, ProfileSection } from './styles'

export const Header = () => {
  const { rating, user } = useCard()

  return (
    <CardHeaderContainer>
      <ProfileSection>
        <Avatar src={user?.image || ''} />
        <div>
          <p>{user?.name}</p>
          <span>Há {dayjs(rating?.created_at).fromNow(true)}</span>
        </div>
      </ProfileSection>
      <StarRating rating={rating?.rate} />
    </CardHeaderContainer>
  )
}
