import { styled } from '@/stitches.config'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridRowGap: '4rem',
  gridTemplateColumns: '1fr',
  '@lg': {
    gridColumnGap: '5rem',
    gridTemplateColumns: '3fr minmax(250px, 1fr)',
  },
})


export const RecentRatesList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  paddingBottom: '$5',
  marginTop: '2.6rem',
  minWidth: '100%',
  '> p': {
    lineHeight: '$short',
    float: 'right',
    fontSize: '$md',
    color: '$gray100',
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
