import dayjs from 'dayjs'
import Image from 'next/image'
import { useState } from 'react'
import { RatingCardProps } from '.'
import { StarRating } from '../../../commons/StarRating'
import { CardContent, SeeMoreButton } from './styles'

export function Content({ rating }: RatingCardProps) {
  const { book } = rating
  const [seeMore, setSeeMore] = useState(false)
  return (
    <CardContent>
      <Image
        src={`/${book.cover_url}.png`}
        width={110}
        height={150}
        alt="user image"
      />
      <div>
        {rating.withDate && (
          <section>
            <span>Há {dayjs(rating.created_at).fromNow(true)}</span>
            <StarRating rating={rating.rate} />
          </section>
        )}
        <h3>{book.name}</h3>
        <span>{book.author}</span>
        {book.summary.length > 150 ? (
          <p>
            {book.summary.slice(0, 150)}

            {seeMore ? (
              book.summary.slice(150, book.summary.length)
            ) : (
              <span>...</span>
            )}
            <SeeMoreButton
              onClick={() => setSeeMore((prevState) => !prevState)}
            >
              {seeMore ? 'ver menos' : 'ver mais'}
            </SeeMoreButton>
          </p>
        ) : (
          <p>{book.summary}</p>
        )}
      </div>
    </CardContent>
  )
}
