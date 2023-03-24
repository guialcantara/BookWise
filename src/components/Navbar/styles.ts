import { styled } from '@/stitches.config'
import Image from 'next/image'
import Link from 'next/link'
export const NavContainer = styled('div', {
  height: '100vh',
  padding: '$5 0 $5 $5',
  display: 'flex',
})

export const NavContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  borderRadius: '$lg',
  flex: 1,
  backgroundImage: '$sidebarBg',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2.5rem',

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },
  'section img': {
    marginBottom: '4rem',
  },
})

export const MenuLink = styled(Link, {
  display: 'flex',
  gap: '$2',
  justifyContent: 'start',
  alignItems: 'center',
  textDecoration: 'none',
  fontSize: '$lg',
  transition: 'all 0.3s',
  '&:hover': {
    color: '$white',
  },
  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        color: '$white',
      },
      false: {
        fontWeight: '$regular',
        color: '$gray400',
      },
    },
  },
})

export const ActiveIndicator = styled('div', {
  height: '100%',
  width: '4px',
  borderRadius: '$lg',
  marginRight: '$2',

  variants: {
    invisible: {
      true: {
        background: 'transparent',
      },
      false: {
        background: '$gradient-vertical',
      },
    },
  },
})

export const LoginButton = styled('button', {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  transition: 'all 0.3s',
  svg: {
    color: '$green100',
  },

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(0.8)',
  },
})
export const LogoutButton = styled('button', {
  all: 'unset',
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
  svg: {
    color: '#F75A68',
  },

  p: {
    maxWidth: '100px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(0.8)',
  },
})
