import { styled } from '@/stitches.config'

export const HomeContainer = styled('div', {
  flex: 1,
  display: 'flex',
  gap: '4rem',
  flexDirection: 'column',
  alignItems: 'center',
  '@lg': {
    flexDirection: 'row',
    alignItems: 'start',
    gap: '8rem',
  },
})


export const RecentRatesList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  paddingBottom: '$5',
  marginTop: '3.6rem',
  '> p': {
    color: '$gray100',
    fontSize: '$sm',
  },
})

export const PopularBooks = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
  '@lg': {
    marginTop: '4.4rem',
    maxWidth: '20.25rem',
  },
})

export const ListHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  a: {
    display: ' flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '$purple100',
    transition: 'all .2s',
    padding: '$1',
    '&:hover': {
      background: '$gray700',
      borderRadius: '$sm',
    },
  },
})

export const Card = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$6',
  marginTop: '$4',
  background: '$gray700',
  borderRadius: '$md',
  padding: '$5',
})