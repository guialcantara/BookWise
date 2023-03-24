import { spawn } from 'child_process'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { StarRating } from '../StarRating'
import {
  BookInformations,
  CardInformations,
  RatingAmount,
  ReadFlag,
  SimpleCardContainer,
} from './styles'

interface SimpleCardProps {
  id: string
  name: string
  author: string
  total_rate: number
  cover_url: string
  imageWidth?: number
  imageHeight?: number
  read?: boolean
  withHover?: boolean
  handleClick?: () => void
  rate_amount?: number
}

export function SimpleCard({
  cover_url,
  total_rate,
  name,
  author,
  imageHeight = 94,
  imageWidth = 64,
  read,
  withHover,
  handleClick,
  rate_amount = 0,
}: SimpleCardProps) {
  return (
    <SimpleCardContainer withHover={withHover} onClick={handleClick}>
      {read && <ReadFlag>LIDO</ReadFlag>}
      <Image
        src={`/${cover_url}.png`}
        width={imageWidth}
        height={imageHeight}
        alt="user image"
      />
      <CardInformations>
        <BookInformations>
          <p>{name}</p>
          <span>{author}</span>
        </BookInformations>
        <div>
          <StarRating rating={total_rate} />
          <RatingAmount>{rate_amount} Avaliações</RatingAmount>
        </div>
      </CardInformations>
    </SimpleCardContainer>
  )
}
