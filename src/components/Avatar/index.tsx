import Image from 'next/image'
import { AvatarContainer } from './styles'

export function Avatar({ src, size = 0 }: { src: string; size?: number }) {
  const style = { '--size':`${ (size || 40) + 2}px` } as React.CSSProperties
  return (
    <AvatarContainer style={style}>
      <Image
        src={src}
        alt="user image"
        width={size || 40}
        height={size || 40}
      />
    </AvatarContainer>
  )
}
