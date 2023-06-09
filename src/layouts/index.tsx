import { Navbar } from '@/components/Navbar'
import { ReactElement } from 'react'
import { LayoutContainer, PageFrame } from './styles'

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <LayoutContainer>
      <Navbar />
      <PageFrame>{children}</PageFrame>
    </LayoutContainer>
  )
}
