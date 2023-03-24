import { styled } from '@/stitches.config'

export const CategoriesContainer = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  overflowX: 'auto',
  gap: '$4',
  marginTop: '3.375rem'
})
export const Chip = styled('li', {
  padding: '$2 $4',
  borderRadius: '$lg',
  transition: 'all .2s',
  '&:hover': {
    cursor: 'pointer',
    border: '1px solid $purple100',
    background: '$purple200',
    color: '$white',
  },
  variants: {
    isActive: {
      true: {
        background: '$purple200',
        border: '1px solid $purple200',
        color: '$white',
      },
      false: {
        border: '1px solid $purple100',
        color: '$purple100',
      },
    },
  },
})
