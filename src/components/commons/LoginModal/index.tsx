import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import { LoginButton } from '../LoginButton'
import { Close, Content, Description, Overlay } from './styles'

import { githubIcon, googleIcon } from '../../../assets'
import { signIn } from 'next-auth/react'
export function LoginModal({ children }: { children: ReactNode }) {
  async function handleSignInGithub() {
    await signIn('github')
  }
  async function handleSignInGoogle() {
    await signIn('google')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Close>
            <X size={24} />
          </Close>
          <Description>
            Faça login para deixar sua avaliação.
          </Description>
          <LoginButton onClick={handleSignInGoogle}>
            <Image src={googleIcon} alt="google logo" />
            Entrar com Google
          </LoginButton>
          <LoginButton onClick={handleSignInGithub}>
            <Image src={githubIcon} alt="github logo" />
            Entrar com Github
          </LoginButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
