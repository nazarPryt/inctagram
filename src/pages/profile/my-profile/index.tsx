import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'
import { Profile } from 'widgets/Profile/Profile'

type ProfilePageProps = {
  userId: number | null
}

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context)

  // TODO
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (session && session.user.userId) {
    return {
      props: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        userId: session.user.userId,
      },
    }
  }

  return {
    props: {
      userId: null,
    },
  }
}

export default function MyProfilePage({ userId }: ProfilePageProps): JSX.Element {
  return <Profile userId={userId} />
}
MyProfilePage.getLayout = getAuthorizedLayout
