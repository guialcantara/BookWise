import Image from 'next/image'
import { AvatarContainer } from './styles'

export function Avatar({ src }: { src: string }) {
  return (
    <AvatarContainer>
      <Image src={src} alt="user image" width={40} height={40} />
    </AvatarContainer>
  )
}
