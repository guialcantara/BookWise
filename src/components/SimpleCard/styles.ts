import { styled } from '@/stitches.config'

export const SimpleCardContainer = styled('li', {
  width: '100%',
  display: 'flex',
  gap: '$4',
  padding: '$4',
  borderRadius: '$md',
  background: '$gray700',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid transparent',
  transition: 'all .3s',
  variants: {
    withHover: {
      true: {
        '&:hover': {
          cursor: 'pointer',
          border: '2px solid $gray600',
        },
      },
    },
  },
})

export const CardInformations = styled('div', {
  display: 'flex',
  flexDirection: ' column',
  justifyContent: 'space-between',
})

export const BookInformations = styled('div', {
  p: {
    marginBottom: '$1',
    fontSize: '$md',
    fontWeight: '$bold',
  },
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const ReadFlag = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  background: '$green300',
  color: '$green100',
  fontWeight: '$bold',
  fontSize: '$xs',
  padding: '$1 $2',
  borderRadius: '0 0 0 $sm',
})

export const RatingAmount = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
})