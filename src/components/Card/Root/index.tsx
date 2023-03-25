import { ReactNode } from "react"
import { CardProvider, ICardContext } from "../useCard"
import { CardRootContainer } from "./styles"

interface CardRoot extends ICardContext {
  children: ReactNode
  withHover?: boolean
}

export const Root = ({ children, user, book, rating, withHover }: CardRoot) => {
  return (
    <CardRootContainer withHover={withHover}>
      <CardProvider user={user} book={book} rating={rating}>
        {children}
      </CardProvider>
    </CardRootContainer>
  )
}