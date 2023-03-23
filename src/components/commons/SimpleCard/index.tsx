import Image from 'next/image'
import { StarRating } from '../StarRating'
import {
  BookInformations,
  CardInformations,
  ReadFlag,
  SimpleCardContainer,
} from './styles'

interface SimpleCardProps {
  id: string
  name: string
  author: string
  total_rate: number
  cover_url: string
  inList?: boolean
  read?: boolean
}

export function SimpleCard({
  cover_url,
  total_rate,
  name,
  author,
  inList,
  read,
}: SimpleCardProps) {
  return (
    <SimpleCardContainer>
      {read&& <ReadFlag>LIDO</ReadFlag>}
      <Image
        src={`/${cover_url}.png`}
        width={inList ? 108 : 64}
        height={inList ? 152 : 94}
        alt="user image"
      />
      <CardInformations>
        <BookInformations>
          <p>{name}</p>
          <span>{author}</span>
        </BookInformations>
        <StarRating rating={total_rate} />
      </CardInformations>
    </SimpleCardContainer>
  )
}
