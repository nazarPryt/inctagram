import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'
import { useGetUserPostQuery } from 'entities/ViewUserPost/api/get-post-api'
import { ViewUserPost } from 'entities/ViewUserPost/ViewUserPost'
import { Loader } from 'shared/ui/Loader/Loader'
import { UserPostsModal } from 'widgets/UserPostsModal/UserPostsModal'

export default function ShowPostPage(): JSX.Element {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const postId = Number(router.query.postId)
  const { data, isLoading } = useGetUserPostQuery(postId)

  useEffect(() => {
    setOpen(true)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (data) {
    return (
      <UserPostsModal open={open} onClose={setOpen}>
        <ViewUserPost data={data} />
      </UserPostsModal>
    )
  }

  return <div>network error</div>
}
ShowPostPage.getLayout = getAuthorizedLayout
