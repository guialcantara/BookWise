import { styled } from '@/stitches.config'

export const HomeContainer = styled('div', {
  margin: '0 6rem',
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
})

export const PageTitle = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$10',
  svg: {
    color: '$green100',
  },
})

export const RecentReviewsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '600px',
  '> p': {
    color: '$gray100',
    fontSize: '$sm',
  },
})

export const PopularBooks = styled('ul', {
  listStyle: 'none',
})
