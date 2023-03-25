import { styled } from "@/stitches.config"

export const CardHeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
})

export const ProfileSection = styled('div', {
  display: 'flex',
  gap: '$4',
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
  p: {
    color: '$gray100',
  },
})