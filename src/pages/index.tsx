import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { getLayoutWithHeader } from '_app/Layouts/unauthorized/Unauthorized'
import { PATH } from 'shared/constants/PATH'
import { Loader } from 'shared/ui/Loader/Loader'

const Home = (): JSX.Element => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'authenticated') {
    router.push(PATH.HOME)
  }
  if (session.status === 'unauthenticated') {
    router.push(PATH.LOGIN)
  }

  return <Loader />
}

Home.getLayout = getLayoutWithHeader
export default Home
