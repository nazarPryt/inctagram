import React from 'react'

import { useGetUserPostsQuery } from 'entities/UserPosts/api/user-posts-api'
import { NoPosts } from 'entities/UserPosts/ui/NoPosts/NoPosts'
import { UserPost } from 'entities/UserPosts/ui/UserPost'
import { Loader } from 'shared/ui/Loader/Loader'
import { ProfilePostsListWrapper } from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'

export const ProfilePostsList = ({ userId }: { userId: number | null }) => {
  const { data: posts, isLoading } = useGetUserPostsQuery(userId as number)

  if (isLoading) {
    return <Loader />
  }
  if (posts && posts.items.length === 0) {
    return <NoPosts />
  }

  return (
    <ProfilePostsListWrapper>
      {posts &&
        posts.items.map(post => {
          const images = [...post.images]
            .filter(img => img.width === 1440)
            .sort((a, b) => b.uploadId.localeCompare(a.uploadId))

          return <UserPost key={post.id} imagesLength={post.images.length} postId={post.id} src={images[0]?.url} />
        })}
    </ProfilePostsListWrapper>
  )
}
