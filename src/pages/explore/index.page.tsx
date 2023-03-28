import { BookDetail } from '@/components/BookDetail'
import { Card } from '@/components/Card'
import { Categories } from '@/components/Categories'
import { PageTitle } from '@/components/PageTitle'
import Layout from '@/layouts'
import { api } from '@/lib/axios'
import { prisma } from '@/lib/prisma'
import { getBooks } from '@/utils/get_books'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { ReactElement, useState } from 'react'
import {
  BookList,
  ExploreContainer,
  ExploreContent,
  ExploreHeader,
  InputContainer,
} from './styles'

interface Book {
  author: string
  cover_url: string
  id: string
  name: string
  total_rate: number
  read: boolean
}
interface ExploreProps {
  categories: {
    id: string
    name: string
  }[]
  books: Book[]
}

const Explore = ({ categories, books }: ExploreProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [bookList, setBookList] = useState(books)
  const [searchField, setSearchField] = useState('')
  const [bookId, setBookId] = useState('')

  async function fetchData(category: string) {
    const bookList = await api.get(`book/${category}`)
    setBookList(bookList.data.books || [])
    setSelectedCategory(category)
  }

  const filtedList = bookList.filter(
    (book) =>
      book.name.toLowerCase().includes(searchField.toLowerCase()) ||
      book.author.toLowerCase().includes(searchField.toLowerCase())
  )
  return (
    <ExploreContainer>
      <ExploreHeader>
        <PageTitle>
          <Binoculars size={32} />
          <h2>Explorar</h2>
        </PageTitle>

        <InputContainer>
          <input
            onChange={(e) => setSearchField(e.target.value)}
            value={searchField}
            type="text"
            placeholder="Buscar livro ou autor"
          />
          <MagnifyingGlass />
        </InputContainer>
      </ExploreHeader>

      <ExploreContent>
        <Categories
          activeCategoryId={selectedCategory}
          handleSelectCategory={fetchData}
          categories={categories}
        />
        
        <BookList >
          
          {filtedList.map((book: Book) => (
            <Card.Root
              withHover
              key={book.id}
              book={{ ...book, summary: '' }}
              rating={{ total_rate: book.total_rate }}
            >
              <Card.SimpleContent
                read={book.read}
                handleClick={() => {
                  setBookId(book.id)
                }}
                imageWidth={108}
                imageHeight={152}
              />
            </Card.Root>
          ))}
        </BookList>
      </ExploreContent>
      {bookId && (
        <BookDetail
          bookId={bookId}
          updateList={() => fetchData(selectedCategory)}
          closeFunction={() => setBookId('')}
        />
      )}
    </ExploreContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  req,
  res,
}) {
  const session = await getSession({ req })
  const categories = await prisma.category.findMany()
  categories.unshift({ id: 'all', name: 'Tudo' })
  const books = await getBooks(session)
  return {
    props: {
      categories,
      books,
    },
  }
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Explore
