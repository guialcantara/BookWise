import { styled } from '@/stitches.config'

export const SimpleCardContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$4',
  padding: '$4',
  borderRadius: '$lg',
  background: '$gray700',
})

export const CardInformations = styled('div', {
  display: 'flex',
  flexDirection: ' column',
  justifyContent: 'space-between',
})
export const BookInformations = styled('div', {
  'p':{
    marginBottom: '$1',
    fontSize: '$md',
    fontWeight: '$bold'
  },
  'span':{
    fontSize :'$sm',
    color: '$gray400'
  }
})
