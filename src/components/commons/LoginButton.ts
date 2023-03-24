import { styled } from "@/stitches.config";

export const LoginButton = styled('button', {
  all: 'unset',
  background: '$gray600',
  borderRadius: '$md',
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
    cursor: 'pointer',
  },
})