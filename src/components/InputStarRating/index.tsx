import { Star } from 'phosphor-react'
import { useState } from 'react'
import { StarContainer } from './styles'

interface StarRatingProps {
  handleChange?: (rating: number) => void
}

export function InputStarRating({ handleChange }: StarRatingProps) {
  const [stars] = useState(Array.from({ length: 5 }))
  const [rate, setRate] = useState(1)
  const [editing, setEditing] = useState(true)

  function handleClick(index: number) {
    setEditing((prevState) => !prevState)
    if (editing) {
      handleChange && handleChange(index)
    }
  }
  return (
    <StarContainer editing={editing}>
      {stars.map((_, index) => (
        <Star
          key={index}
          onMouseEnter={() => editing && setRate(index + 1)}
          onClick={() => handleClick(index)}
          size={22}
          weight={index < rate ? 'fill' : 'regular'}
        />
      ))}
    </StarContainer>
  )
}
