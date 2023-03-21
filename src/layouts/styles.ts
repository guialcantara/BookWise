import { styled } from '@/stitches.config'

export const LayoutContainer = styled('div', {
  display: 'flex',
  width: '100vw',
  height: '100vh',
  '> main': {
    width: '100%',
    paddingTop: '4.75rem',
    overflow: 'hidden',
    overflowY: 'auto',
    display: 'flex',
  },
})
