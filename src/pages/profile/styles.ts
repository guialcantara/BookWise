import { styled } from '@/stitches.config'

export const ProfileContainer = styled('div', { flex: 1 })

export const ProfileHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const InputContainer = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '$3 $5',
  flex: 1,
  '&:focus-within': {
    border: '1px solid $gray400',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '$white',
    '&:focus': {
      outline: 'none',
    },
  },
  svg: {
    color: '$gray500',
  },
})

export const RatingList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  listStyle: 'none',
  flex: 1,
  marginTop: '$5',
})

export const Date = styled('p', {
  fontSize: '$sm',
  color: '$gray300',
  marginBottom: '$2',
})

export const ProfileContent = styled('div', {
  display: 'flex',
  gap: '$10',
})

export const UserData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '1px solid $gray700',
  height: 'min-content',
  padding: '$4',
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    h3: {
      marginTop: '$5',
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
  },
})

export const InformationItem = styled('div', {
  display: 'flex',
  gap: '$4',
  span: {
    color: '$gray300',
    fontSize: '$sm',
  },
  p: {
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$bold',
  },
  svg: {
    color: '$green100',
  },
})

export const Divider = styled('div', {
  width: '2rem',
  height: '0.25rem',
  borderRadius: '$lg',
  background: '$gradient-horizontal',
  margin: '$10 0',
})
