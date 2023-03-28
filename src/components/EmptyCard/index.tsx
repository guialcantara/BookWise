import { Smiley } from 'phosphor-react'
import { EmptyCardContainer } from './styles'

export const EmptyCard = () => {
  return (
    <EmptyCardContainer>
      <Smiley size={32} weight="fill" />
      <p>Nenhuma avaliação foi feita ainda!</p>
    </EmptyCardContainer>
  )
}
