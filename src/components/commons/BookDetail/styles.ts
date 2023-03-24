import { styled } from '@/stitches.config'

export const BookDetailOverlay = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'end',
  background: 'rgba(0, 0, 0, 0.6)',
  top: 0,
  left: 0,
})

export const BookDetailContent = styled('div', {
  padding: '$5 3rem 0',
  height: '100%',
  background: '$gray800',
  width: '600px'
})

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray700',
  display: 'flex',
})



