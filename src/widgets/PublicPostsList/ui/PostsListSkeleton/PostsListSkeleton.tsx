import { PostSkeleton } from '@/entities/postsList/ui/PostsListSkeleton/PostSkeleton'
import { PostsListSkeletonStyled } from '@/entities/postsList/ui/PostsListSkeleton/PostsListSkeleton.styled'

export const PostsListSkeleton = () => {
  return (
    <PostsListSkeletonStyled>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </PostsListSkeletonStyled>
  )
}
