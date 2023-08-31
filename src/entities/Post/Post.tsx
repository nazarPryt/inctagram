import { PostWrapper } from 'entities/Post/Post.styled'
import { PostCommentForm } from 'entities/Post/ui/PostCommentForm/PostCommentForm'
import { PostComments } from 'entities/Post/ui/PostComments/PostComments'
import { PostFeatures } from 'entities/Post/ui/PostFeatures/PostFeatures'
import { PostHeader } from 'entities/Post/ui/PostHeader/PostHeader'
import { PostImage } from 'entities/Post/ui/PostImage/PostImage'
import { PostLikes } from 'entities/Post/ui/PostLikes/PostLikes'
import { PostCardType } from 'entities/UserPosts/api/types'

type PostType = {
  post: PostCardType
}

export const Post = ({ post }: PostType): JSX.Element => {
  return (
    <PostWrapper>
      <PostHeader img={post.images[0].url} userID={post.id} />
      <PostImage images={post.images} />
      <PostFeatures />
      <PostComments />
      <PostLikes />
      <PostCommentForm />
    </PostWrapper>
  )
}
