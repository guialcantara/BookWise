import { styled } from '@/stitches.config'

export const BookDetailOverlay = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'end',
  background: 'rgba(0, 0, 0, 0.6)',
  top: 0,
  left: 0,
})

export const BookDetailContent = styled('div', {
  padding: '$5 3rem 0',
  height: '100%',
  background: '$gray800',
  width: '600px',
  overflow: 'hidden',
  overflowY: 'auto'
})

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray700',
  display: 'flex',
})

export const RatingContainer = styled('li', {
  padding: ' $7 $5',
  borderRadius: '$md',
  background: '$gray700',

  '> p': {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const RatingTextareaContainer = styled('div', {
  textarea: {
    resize: 'none',
    width: '100%',
    background: '$gray800',
    border: '1px solid $gray600',
    borderRadius: '$sm',
    height: '6rem',
    padding: '$4',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray200',

    '&::placeholder': {
      color: '$gray400',
    },
  },

  div: {
    marginTop: '$4',
    display: 'flex',
    justifyContent: 'end',
    gap: '$2',
  },
})

export const RatingButton = styled('button', {
  padding: '$2',
  background: '$gray600',
  border: 'none',
  borderRadius: '$sm',
  variants: {
    confirm: {
      true: {
        color: '$green100',
      },
      false: {
        color: '$purple100',
      },
    },
  },
})

export const RatingHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1.5rem',
})

export const UserInformation = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const RatingList = styled('div', {
  marginTop: '3rem',
})

export const RatingListHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$4',
  p: {
    color: '$gray200',
    fontSize: '$sm',
  },
  button: {
    border: 'none',
    background: 'transparent',
    color: '$purple100',
    fontWeight: '$bold',
    fontSize: '$md',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const RatingListContent = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  paddingBottom: '$4'
})
