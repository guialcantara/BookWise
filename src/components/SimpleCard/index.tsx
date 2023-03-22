import Image from 'next/image'
import { StarRating } from '../StarRating'
import { BookInformations, CardInformations, SimpleCardContainer } from './styles'

interface SimpleCardProps {
  id: string
  name: string
  author: string
  total_rate: number
  rate_amount: number
  cover_url: string
}

export function SimpleCard({ cover_url, total_rate,rate_amount, name, author }: SimpleCardProps) {
  return (
    <SimpleCardContainer>
      <Image
        src={`/${cover_url}.png`}
        width={64}
        height={94}
        alt="user image"
      />
      <CardInformations>
        <BookInformations>
          <p>{name}</p>
          <span>{author}</span>
        </BookInformations>
        <StarRating rating={Math.ceil(total_rate/rate_amount)} />
      </CardInformations>
    </SimpleCardContainer>
  )
}
