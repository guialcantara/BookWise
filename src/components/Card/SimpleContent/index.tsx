import { StarRating } from '@/components/StarRating'
import Image from 'next/image'
import { useCard } from '../useCard'
import {
  BookInformations,
  CardInformations,
  RatingAmount,
  ReadFlag,
  SimpleContentContainer,
} from './styles'

interface SimpleContentProps {
  imageWidth: number
  imageHeight: number
  read?: boolean
  handleClick?: () => void
}
export const SimpleContent = ({
  imageWidth,
  imageHeight,
  read,
  handleClick,
}: SimpleContentProps) => {
  const { rating, book } = useCard()
  return (
    <SimpleContentContainer onClick={handleClick}>
      {read && <ReadFlag>LIDO</ReadFlag>}
      <Image
        src={`/${book?.cover_url}.png`}
        width={imageWidth}
        height={imageHeight}
        alt="user image"
      />
      <CardInformations>
        <BookInformations>
          <p>{book?.name}</p>
          <span>{book?.author}</span>
        </BookInformations>
        <div>
          <StarRating rating={rating?.total_rate} />
          {rating?.rate_amount && (
            <RatingAmount>{rating?.rate_amount} Avaliações</RatingAmount>
          )}
        </div>
      </CardInformations>
    </SimpleContentContainer>
  )
}
