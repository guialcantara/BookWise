import { styled } from '@/stitches.config'

export const EmptyCardContainer = styled(
  'div',
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
    alignItems: 'center',
    padding: '$4',

    borderRadius: '$md',
    overflow: 'hidden',

    background: '$gray700',
    border: '1px solid $gray600',
    color: '$gray400',
    fontSize: '$lg'
  }
)
