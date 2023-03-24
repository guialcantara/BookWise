import { styled } from '@/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  inset: 0,
  animation: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: 'none',
  background: 'transparent',
  color: '$gray400',
  transition: 'all 0.3s',
  '&:hover': {
    color: '$gray100',
    cursor: 'pointer',
  },
})
export const Description = styled(Dialog.Description, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem ',
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray700',
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 'min-content',
  maxHeight: '85vh',
  padding: '25px',
  animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
