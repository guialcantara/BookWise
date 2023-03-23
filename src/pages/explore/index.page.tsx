import { Categories } from '@/components/modules/explore/Categories'
import { PageTitle } from '@/components/commons/PageTitle'
import Layout from '@/layouts'
import { api } from '@/lib/axios'
import { prisma } from '@/lib/prisma'
import { GetServerSideProps } from 'next'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { ReactElement, useState } from 'react'
import {
  BookList,
  ExploreContainer,
  ExploreContent,
  ExploreHeader,
  InputContainer,
} from './styles'
import { SimpleCard } from '@/components/commons/SimpleCard'
import { getBooks } from '@/utils/get_books'
import { getSession } from 'next-auth/react'

interface ExploreProps {
  categories: {
    id: string
    name: string
  }[]
  books: {
    author: string
    cover_url: string
    id: string
    name: string
    total_rate: number
  }[]
}

const Explore = ({ categories, books }: ExploreProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [bookList, setBookList] = useState(books)
  const [searchField, setSearchField] = useState('')
  console.log(bookList)
  async function handleChangeCategory(category: string) {
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
          <h2> Explorar </h2>
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
          handleSelectCategory={handleChangeCategory}
          categories={categories}
        />
        <BookList>
          {filtedList.map((book) => (
            <SimpleCard inList key={book.id} {...book} />
          ))}
        </BookList>
      </ExploreContent>
    </ExploreContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  req,
  res,
}) {
  const session = getSession({ req })
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
