import { logo } from '@/assets'
import Image from 'next/image'
import {
  ActiveIndicator,
  LoginButton,
  LogoutButton,
  MenuLink,
  NavContainer,
  NavContent,
} from './styles'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { LoginModal } from '../LoginModal'

interface ActiveLinkProps {
  href: string
  title: string
  icon: ReactElement
}

function ActiveLink({ icon, title, href }: ActiveLinkProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <MenuLink href={href} active={isActive}>
      <ActiveIndicator invisible={!isActive} />
      {icon}
      {title}
    </MenuLink>
  )
}

export function Navbar() {
  const session = useSession()

  const authenticated = session.status === 'authenticated'
  return (
    <NavContainer>
      <NavContent>
        <section>
          <Image src={logo} alt="bookwise" />

          <ActiveLink
            href="/home"
            icon={<ChartLineUp size={24} />}
            title="Início"
          />
          <ActiveLink
            href="/explore"
            icon={<Binoculars size={24} />}
            title="Explorar"
          />
          {authenticated && (
            <ActiveLink
              href="/profile"
              icon={<User size={24} />}
              title="Perfil"
            />
          )}
        </section>
        {authenticated ? (
          <LogoutButton onClick={() => signOut()}>
            <Avatar src={session.data?.user?.image || ''} />
            <p title={session.data?.user?.name || ''}>
              {session.data?.user?.name}
            </p>
            <SignOut size={24} />
          </LogoutButton>
        ) : (
          <LoginModal>
            <LoginButton>
              Fazer login
              <SignIn size={24} />
            </LoginButton>
          </LoginModal>
        )}
      </NavContent>
    </NavContainer>
  )
}
