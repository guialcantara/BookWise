import { styled } from "../../stitches.config";

export const LoginContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  padding: '$5'
})

export const LoginButton = styled('button', {
  all: 'unset',
  background: '$gray600',
  borderRadius: '$lg',
  color: '$gray200',
  display: 'flex',
  gap: '$5',
  padding: '$6',
  fontWeight: '$bold',
  fontFamily: '$default',
  justifyContent: 'start',
  alignItems: 'center',
  width: '24.5rem',
  transition: 'all .5s',
  '&:hover': {
    background: '$gray500',
    cursor: 'pointer'
  }
})

export const ButtonArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4'
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '$4',
  width: '27.5rem',
  marginBottom: '1.5rem',
  'p': {
    fontSize: '16px',
  }
})

export const ImageContainer = styled('div', {
  maxWidth: '822px',
  display: 'flex',
  justifyContent: 'start',
  'img': {
    objectFit: 'contain',
    height: '100%',
    width: '100%'
  }
})