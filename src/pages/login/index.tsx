import Image from "next/image";
import { ButtonArea, ImageContainer, LoginButton, LoginContainer, Title } from "./styles";
import { login, githubIcon, googleIcon, visitionIcon } from '../../assets'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function Login() {
  const session = useSession()
  const router = useRouter()

  async function handleSignInGithub() {
    await signIn('github')
  }
  async function handleSignInGoogle() {
    await signIn('google')
  }

  if (session.status === 'authenticated') {
    router.push('/home')
  }
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={login} alt="imagem com um escrito bookwise" />
      </ImageContainer>
      <ButtonArea>

        <Title>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>
        </Title>
        <LoginButton onClick={handleSignInGoogle}>
          <Image src={googleIcon} alt="google logo" />
          Entrar com Google
        </LoginButton>
        <LoginButton onClick={handleSignInGithub}>
          <Image src={githubIcon} alt="github logo" />
          Entrar com Github
        </LoginButton>
        <LoginButton>
          <Image src={visitionIcon} alt="icone de um foguete" />
          Acessar como visitante
        </LoginButton>
      </ButtonArea>
    </LoginContainer>
  )
}