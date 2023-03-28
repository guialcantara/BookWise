import { styled } from '@/stitches.config'

export const AvatarContainer = styled('div', {
  position: 'relative',
  background: '$gradient-vertical',
  borderRadius: '$full',
  minWidth: 'var(--size)',
  minHeight: 'var(--size)',
  width: 'var(--size)',
  height: 'var(--size)',
  img: {
    borderRadius: '$full',
    position: 'absolute',
    top: 1,
    left: 1,
  },
})
