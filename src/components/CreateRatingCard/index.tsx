import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { Check, X } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import { InputStarRating } from '../InputStarRating'
import {
  RatingButton,
  RatingContainer,
  RatingHeader,
  RatingTextareaContainer,
  UserInformation,
} from './styles'

interface CreateRatingCardProps {
  bookId: string
  closeFunction: () => void
  updateList: () => void
}

export function CreateRatingCard({
  bookId,
  closeFunction,
  updateList
}: CreateRatingCardProps) {
  const [newRating, setNewRating] = useState(1)
  const [newDescription, setNewDescription] = useState('')

  const { data } = useSession()

  async function handleCreateRating() {
    const result = await api.post('/rating', {
      bookId,
      email: data?.user?.email,
      rate: newRating,
      description: newDescription,
    })
    closeFunction()
    updateList()
  }

  return (
    <RatingContainer>
      <RatingHeader>
        <UserInformation>
          <Avatar src={data!.user?.image ?? ''} />
          <h4>{data!.user?.name}</h4>
        </UserInformation>
        <InputStarRating handleChange={(rating) => setNewRating(rating)} />
      </RatingHeader>
      <RatingTextareaContainer>
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Escreva sua avaliação"
          maxLength={450}
        />
        <div>
          <RatingButton confirm={false} onClick={closeFunction}>
            <X weight="bold" size={22} />
          </RatingButton>
          <RatingButton confirm onClick={handleCreateRating}>
            <Check weight="bold" size={22} />
          </RatingButton>
        </div>
      </RatingTextareaContainer>
    </RatingContainer>
  )
}
