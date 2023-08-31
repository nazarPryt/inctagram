import { useRouter } from 'next/router'

import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'

export default function UserProfilePage(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <p>UserProfilePage </p>
      <p>userID: {router.query.userID}</p>
    </>
  )
}
UserProfilePage.getLayout = getAuthorizedLayout
