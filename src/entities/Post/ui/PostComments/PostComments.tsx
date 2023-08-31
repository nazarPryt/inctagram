import { Comment } from 'entities/Comment/ui/Comment'
import { PostCommentsWrapper } from 'entities/Post/ui/PostComments/PostComments.styled'

export const PostComments = (): JSX.Element => {
  return (
    <PostCommentsWrapper>
      <Comment isLiked comment="post.description" img="https://loremflickr.com/500/500" userID={1} />
      <Comment comment="post.description" img="https://loremflickr.com/500/500" isLiked={false} userID={2} />
      <Comment isLiked comment="post.description" img="https://loremflickr.com/500/500" userID={3} />
      <Comment comment="post.description" img="https://loremflickr.com/500/500" isLiked={false} userID={4} />
      <Comment comment="post.description" img="https://loremflickr.com/500/500" isLiked={false} userID={5} />
      <Comment comment="post.description" img="https://loremflickr.com/500/500" isLiked={false} userID={6} />
    </PostCommentsWrapper>
  )
}
