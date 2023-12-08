import {Comment} from 'entities/Comment/ui/Comment'
import {PostCommentsWrapper} from 'entities/Post/ui/PostComments/PostComments.styled'

type PostDescriptionType = {}
export const PostComments = ({}: PostDescriptionType) => {
    return (
        <PostCommentsWrapper>
            <Comment isLiked={true} comment={'post.description'} userID={1} img={'https://loremflickr.com/500/500'} />
            <Comment isLiked={false} comment={'post.description'} userID={2} img={'https://loremflickr.com/500/500'} />
            <Comment isLiked={true} comment={'post.description'} userID={3} img={'https://loremflickr.com/500/500'} />
            <Comment isLiked={false} comment={'post.description'} userID={4} img={'https://loremflickr.com/500/500'} />
            <Comment isLiked={false} comment={'post.description'} userID={5} img={'https://loremflickr.com/500/500'} />
            <Comment isLiked={false} comment={'post.description'} userID={6} img={'https://loremflickr.com/500/500'} />
        </PostCommentsWrapper>
    )
}
