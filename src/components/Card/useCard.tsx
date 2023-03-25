import { createContext, ReactNode, useContext } from 'react'

export const CardContext = createContext<ICardContext>({})

export interface ICardContext {
  user?: {
    name: string
    email?: string
    image: string
  }
  book?: {
    cover_url: string
    name: string
    id?: string
    author: string
    summary: string
    pages?: number
    bookCategories?: string
    total_pages?: number
  }
  rating?: {
    total_rate?: number
    rate_amount?: number
    created_at?: string
    rate?: number
  }
}

interface CardProviderProps {
  children: ReactNode
  user?: {
    name: string
    email?: string
    image: string
  }
  book?: {
    cover_url: string
    name: string
    id?: string
    author: string
    summary: string
  }
  rating?: {
    total_rate?: number
    rate_amount?: number
    created_at?: string
  }
}
export const CardProvider = ({
  children,
  user,
  book,
  rating,
}: CardProviderProps) => {
  return (
    <CardContext.Provider value={{ user, book, rating }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCard = () => useContext(CardContext)
