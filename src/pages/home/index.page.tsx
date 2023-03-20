import Layout from '@/layouts'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app.page'
const Home: NextPageWithLayout = () => {
  return <div>
    home
  </div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home