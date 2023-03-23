import { Star } from 'phosphor-react'
import { useState } from 'react'
import { StarContainer } from './styles'

interface StarRatingProps {
  starsAmount?: number
  rating?: number
  handleClick?: (rating: number) => void
}

export function StarRating({
  starsAmount = 5,
  rating = 0,
  handleClick,
}: StarRatingProps) {
  const [stars] = useState(Array.from({ length: starsAmount }))
  const [rate] = useState(rating)
  return (
    <StarContainer>
      {stars.map((_, index) => (
        <Star
          key={index}
          onClick={() => handleClick && handleClick(index)}
          size={16}
          weight={index < rate ? 'fill' : 'regular'}
        />
      ))}
    </StarContainer>
  )
}
