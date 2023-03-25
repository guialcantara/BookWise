import { styled } from "@/stitches.config";

export const CardRootContainer = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  position: 'relative',
  padding: '$4',

  borderRadius: '$md',
  overflow: 'hidden',

  background: '$gray700',
  border: '2px solid transparent',
  transition: 'all .3s',
  variants: {
    withHover: {
      true: {
        '&:hover': {
          cursor: 'pointer',
          border: '2px solid $gray600',
        },
      },
    },
  },
})
