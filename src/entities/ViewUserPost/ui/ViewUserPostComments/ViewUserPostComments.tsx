import { Comment } from 'entities/Comment/ui/Comment'
import { ViewUserPostCommentsWrapper } from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments.styled'

export const ViewUserPostComments = (): JSX.Element => {
  const comment =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius eos facilis natus nisi obcaecati quis quod? Error, iure sunt?'

  return (
    <ViewUserPostCommentsWrapper>
      <Comment isLiked comment={comment} img="https://loremflickr.com/500/500" userID={3} />
      <Comment comment={comment} img="https://loremflickr.com/500/500" isLiked={false} userID={3} />
      <Comment comment={comment} img="https://loremflickr.com/500/500" isLiked={false} userID={3} />
      <Comment isLiked comment={comment} img="https://loremflickr.com/500/500" userID={3} />
      <Comment isLiked comment={comment} img="https://loremflickr.com/500/500" userID={3} />
      <Comment isLiked comment={comment} img="https://loremflickr.com/500/500" userID={3} />
    </ViewUserPostCommentsWrapper>
  )
}
