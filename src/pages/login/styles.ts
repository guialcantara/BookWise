import { styled } from '../../stitches.config'

export const LoginContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  padding: '$5',
})



export const ButtonArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '$4',
  width: '27.5rem',
  marginBottom: '1.5rem',
  p: {
    fontSize: '16px',
  },
})

export const ImageContainer = styled('div', {
  maxWidth: '822px',
  display: 'flex',
  justifyContent: 'start',
  img: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },
})
