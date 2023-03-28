import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { Check, X } from 'phosphor-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
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
  updateList,
}: CreateRatingCardProps) {
  const [newRating, setNewRating] = useState<Number | null>(null)
  const [newDescription, setNewDescription] = useState('')

  const { data } = useSession()
  function validateForm() {
    if (!newRating) {
      toast.error('Por favor selecione uma nota', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      })
      return false
    }
    if (!newDescription) {
      toast.error('Por favor preencha a descrição', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2500,
      })
      return false
    }

    return true
  }
  async function handleCreateRating() {
    if (validateForm()) {
      await api
        .post('/rating', {
          bookId,
          id: data?.user?.id,
          rate: newRating,
          description: newDescription,
        })
        .then(() => {
          toast.success('Livro avaliado com sucesso!', {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          })
          updateList()
        })
        .catch((err) => {
          if (err instanceof AxiosError && err?.response?.data?.message) {
            toast.error(`Opss... ${err.response.data.message}`, {
              position: toast.POSITION.TOP_LEFT,
              autoClose: 2000,
            })
            return
          }
        })
        .finally(() => {
          closeFunction()
        })
    }
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
