import { Navbar } from '@/components/Navbar'
import { ReactElement } from 'react'
import { LayoutContainer } from './styles'

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <LayoutContainer>
      <Navbar />
      <main>{children}</main>
    </LayoutContainer>
  )
}
