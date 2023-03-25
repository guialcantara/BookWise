import { styled } from "@/stitches.config"

export const CardContentContainer = styled('main', {
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

export const SeeMoreButton = styled('button', {
  all: 'unset',
  color: '$purple100',

  '&:hover':{
    cursor: 'pointer',
  }
})