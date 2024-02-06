import { GetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostItem } from '@/entities/postsList/ui/PostItem/PostItem'
import { IsEmpty } from '@/shared/components/IsEmpty'

import { PostsListSkeleton } from '../PostsListSkeleton'
import { PostsListStyled } from './PostsList.styled'

type PostsListType = {
  loading: boolean
  posts?: GetPostsQuery['getPosts']['items']
}
export const PostsList = ({ loading, posts }: PostsListType) => {
  if (loading) {
    return <PostsListSkeleton />
  }

  if (posts && posts?.length) {
    return (
      <PostsListStyled>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </PostsListStyled>
    )
  }

  return <IsEmpty text={'This is weird, but no one didnt make any post yet'} />
}
