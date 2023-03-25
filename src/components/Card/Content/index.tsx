import { StarRating } from '@/components/StarRating'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useState } from 'react'
import { useCard } from '../useCard'
import { CardContentContainer, SeeMoreButton } from './styles'

export const Content = ({ withRating }: { withRating?: boolean }) => {
  const { book, rating } = useCard()
  const [seeMore, setSeeMore] = useState(false)

  return (
    <CardContentContainer>
      <Image
        src={`/${book?.cover_url}.png`}
        width={110}
        height={150}
        alt="user image"
      />
      <div>
        {withRating && (
          <section>
            <span>Há {dayjs(rating?.created_at).fromNow(true)}</span>
            <StarRating rating={rating?.rate} />
          </section>
        )}
        <h3>{book?.name}</h3>
        <span>{book?.author}</span>
        {book && book?.summary.length > 150 ? (
          <p>
            {book?.summary.slice(0, 150)}

            {seeMore ? (
              book?.summary.slice(150, book?.summary.length)
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
          <p>{book?.summary}</p>
        )}
      </div>
    </CardContentContainer>
  )
}
