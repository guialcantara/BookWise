import { styled } from '@/stitches.config'

export const AvatarContainer = styled('div', {
  position: 'relative',
  background: '$gradient-vertical',
  borderRadius: '$full',
  minWidth: '42px',
  minHeight: '42px',
  width: '42px',
 height: '42px',
  img: {
    borderRadius: '$full',
    position: 'absolute',
    top: 1,
    left: 1,
  },
})