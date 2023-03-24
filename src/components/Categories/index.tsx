import { CategoriesContainer, Chip } from './styles'
interface CategoriesProps {
  categories: {
    id: string
    name: string
  }[]
  activeCategoryId: string
  handleSelectCategory: (category: string) => void
}
export const Categories = ({
  categories,
  activeCategoryId,
  handleSelectCategory
}: CategoriesProps) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Chip
          onClick={() => handleSelectCategory(category.id)}
          isActive={activeCategoryId === category.id}
          key={category.id}
        >
          {category.name}
        </Chip>
      ))}
    </CategoriesContainer>
  )
}
