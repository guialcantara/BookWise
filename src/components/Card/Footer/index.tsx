import { BookmarkSimple, BookOpen } from 'phosphor-react'
import { useCard } from '../useCard'
import { FooterContainer, FooterItem } from './styles'

export const Footer = () => {
  const { book } = useCard()

  return (
    <FooterContainer>
      <FooterItem>
        <BookmarkSimple size={24} />
        <div>
          <span>Categorias</span>
          <p>{book?.bookCategories}</p>
        </div>
      </FooterItem>
      <FooterItem>
        <BookOpen size={24} />
        <div>
          <span>Paginas</span>
          <p> {book?.total_pages}</p>
        </div>
      </FooterItem>
    </FooterContainer>
  )
}
