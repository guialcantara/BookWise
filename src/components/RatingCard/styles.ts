import { styled } from '@/stitches.config'

export const Card = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  background: '$gray700',
  borderRadius: '$md',
  padding: '$5',
})

export const CardHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CardContent = styled('main', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
    minHeight: '150px',
  },
  span: {
    fontSize: '$sm',
    color: '$gray400',
    marginBottom: '$6',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between'
  },
})

export const ProfileSection = styled('div', {
  display: 'flex',
  gap: '$4',
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
  p: {
    color: '$gray100',
  },
})

export const SeeMoreButton = styled('button', {
  all: 'unset',
  color: '$purple100',

  '&:hover':{
    cursor: 'pointer',
  }
})
