import { styled } from '@/stitches.config'

export const StarContainer = styled('div', {
  variants: {
    editing: {
      true: {
        color: '$purple100',
        filter: 'brightness(0.8)',
        '&:hover': {
          cursor: 'pointer',
        },
      },
      false: { color: '$purple100' },
    },
  },
})
