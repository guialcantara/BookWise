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
import { MagnifyingGlass, User } from 'phosphor-react'
import { ReactElement, useState, useEffect } from 'react'
import {
  Date,
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
    }
    getDate()
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
          <Avatar src={data?.user?.image || ''} />
          <h3>{data?.user?.name}</h3>
          <Date>
            Membro desde {dayjs(data?.user?.created_at).format('YYYY')}
          </Date>
        </UserData>
      </ProfileContent>
    </ProfileContainer>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
