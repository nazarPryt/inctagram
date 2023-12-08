import {ViewUserPostCommentsWrapper} from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments.styled'
import {Comment} from 'entities/Comment/ui/Comment'

export const ViewUserPostComments = () => {
    const comment =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius eos facilis natus nisi obcaecati quis quod? Error, iure sunt?'
    return (
        <ViewUserPostCommentsWrapper>
            <Comment comment={comment} userID={3} img={'https://loremflickr.com/500/500'} isLiked={true} />
            <Comment comment={comment} userID={3} img={'https://loremflickr.com/500/500'} isLiked={false} />
            <Comment comment={comment} userID={3} img={'https://loremflickr.com/500/500'} isLiked={false} />
            <Comment comment={comment} userID={3} img={'https://loremflickr.com/500/500'} isLiked={true} />
            <Comment comment={comment} userID={3} img={'https://loremflickr.com/500/500'} isLiked={true} />
            <Comment comment={comment} userID={3} img={'https://loremflickr.com/500/500'} isLiked={true} />
        </ViewUserPostCommentsWrapper>
    )
}
