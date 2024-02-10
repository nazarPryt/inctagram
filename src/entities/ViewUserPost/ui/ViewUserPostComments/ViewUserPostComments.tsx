import {Comment} from '@/entities/Comment/ui/Comment'

import {ViewUserPostCommentsWrapper} from './ViewUserPostComments.styled'

export const ViewUserPostComments = () => {
    const comment =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eius eos facilis natus nisi obcaecati quis quod? Error, iure sunt?'

    return (
        <ViewUserPostCommentsWrapper>
            <Comment comment={comment} img={'https://loremflickr.com/500/500'} isLiked userID={3} />
            <Comment comment={comment} img={'https://loremflickr.com/500/500'} isLiked={false} userID={3} />
            <Comment comment={comment} img={'https://loremflickr.com/500/500'} isLiked={false} userID={3} />
            <Comment comment={comment} img={'https://loremflickr.com/500/500'} isLiked userID={3} />
            <Comment comment={comment} img={'https://loremflickr.com/500/500'} isLiked userID={3} />
            <Comment comment={comment} img={'https://loremflickr.com/500/500'} isLiked userID={3} />
        </ViewUserPostCommentsWrapper>
    )
}
