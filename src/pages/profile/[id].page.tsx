import { Avatar } from '@/components/Avatar'
import { Card } from '@/components/Card'
import { PageTitle } from '@/components/PageTitle'
import Layout from '@/layouts'
import { api } from '@/lib/axios'
import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from 'phosphor-react'
import { ReactElement, useState, useEffect } from 'react'
import {
  Date,
  InformationItem,
  InputContainer,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  RatingList,
  UserData,
} from './styles'

interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
  }
  user: {
    name: string
    image: string
  }
}

interface UserData {
  name: string
  created_at: string
  image: string
  readPages: string
  ratedBooks: string
  totalAuthors: string
  favoriteCategory: string
}

const Profile = () => {
  const [searchField, setSearchField] = useState('')
  const [ratingsList, setRatingsList] = useState<Rating[]>([])
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const { data } = useSession()
  const router = useRouter()
  const id = router.query.id as string
  useEffect(() => {
    async function getDate() {
      const result = await api.get(`rating/${id}`)
      console.log(result)
      setUserData(result.data.userData)
      setRatingsList(result.data.ratings)
    }
    if (id) getDate()
  }, [id])

  const filtedRatingList = ratingsList.filter((rating) =>
    rating.book.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <ProfileContainer>
      <ProfileHeader>
        <PageTitle>
          <User size={32} />
          <h2> Perfil </h2>
        </PageTitle>

        <InputContainer>
          <input
            onChange={(e) => setSearchField(e.target.value)}
            value={searchField}
            type="text"
            placeholder="Buscar livro avaliado"
          />
          <MagnifyingGlass />
        </InputContainer>
      </ProfileHeader>
      <ProfileContent>
        <RatingList>
          {filtedRatingList.map((rating) => (
            <div key={rating.id}>
              <Date>Há {dayjs(rating?.created_at).fromNow(true)}</Date>
              <Card.Root
                book={rating.book}
                user={rating.user}
                rating={{ total_rate: rating.rate }}
              >
                <Card.SimpleContent imageWidth={98} imageHeight={134} />
                <p>{rating.description}</p>
              </Card.Root>
            </div>
          ))}
        </RatingList>
        <UserData>
          <div>
            <Avatar src={userData?.image || ''} />
            <h3>{userData?.name}</h3>
            <Date>
              Membro desde {dayjs(userData?.created_at).format('YYYY')}
            </Date>
          </div>
          <div></div>
          <div>
            <InformationItem>
              <BookOpen size={24} />
              <div>
                <p>{userData?.readPages}</p>
                <span>Páginas lidas</span>
              </div>
            </InformationItem>
            <InformationItem>
              <Books size={24} />
              <div>
                <p>{userData?.ratedBooks}</p>
                <span>Livros avaliados</span>
              </div>
            </InformationItem>
            <InformationItem>
              <UserList size={24} />
              <div>
                <p>{userData?.totalAuthors}</p>
                <span>Autores lidos</span>
              </div>
            </InformationItem>
            <InformationItem>
              <BookmarkSimple size={24} />
              <div>
                <p>{userData?.favoriteCategory}</p>
                <span>Categoria mais lida</span>
              </div>
            </InformationItem>
          </div>
        </UserData>
      </ProfileContent>
    </ProfileContainer>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
