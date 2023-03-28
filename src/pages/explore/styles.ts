import { styled } from "@/stitches.config"


export const ExploreContainer = styled('section', {
  flex: 1,
  width: '100%',
})

export const ExploreHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
  '@lg': {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

export const ExploreContent = styled('section', {})

export const InputContainer = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '$3 $5',
  flex: 1,
  maxWidth: '27rem',
  width: '100%',
  '&:focus-within': {
    border: '1px solid $gray400',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '$white',
    '&:focus': {
      outline: 'none',
    },
  },
  svg: {
    color: '$gray500',
  },
})

export const BookList = styled('ul', {
  listStyle: 'none',
  display: 'grid',
  gridGap: '20px',
  gridAutoRows: 'auto',
  gridTemplateColumns: 'repeat(auto-fill, minmax(318px, 1fr))',
  marginTop: '3rem',
})
