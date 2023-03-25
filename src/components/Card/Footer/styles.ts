import { styled } from '@/stitches.config'

export const FooterContainer = styled('div', {
  width: '100%',
  borderTop: '1px solid $gray600',
  display: 'flex',
  gap: '$10',
  padding: '$5 0',
})

export const FooterItem = styled('div', {
  display: 'flex',
  gap: '$4',
  span: {
    color: '$gray300',
    fontSize: '$sm',
  },
  p: {
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$bold',
  },
  svg: {
    color: '$green100',
  },
})
