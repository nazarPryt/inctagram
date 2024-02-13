import {Comment} from '@/entities/Comment/ui/Comment'
import {Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {PostCommentsWrapper} from './PostComments.styled'

type PostDescriptionType = {}
export const PostComments = ({}: PostDescriptionType) => {
    const commentData =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur cumque debitis doloribus eius, est mollitia nesciunt optio perspiciatis placeat provident quibusdam repellendus sint ullam unde? Ad animi beatae enim ipsa, ipsum numquam perferendis placeat quae quasi quis, quisquam repellendus.'

    return (
        <PostCommentsWrapper>
            <Scrollbar maxHeight={200}>
                <Comment comment={commentData} img={'https://loremflickr.com/500/500'} isLiked userID={1} />
                <Comment comment={commentData} img={'https://loremflickr.com/500/500'} isLiked={false} userID={2} />
                <Comment comment={commentData} img={'https://loremflickr.com/500/500'} isLiked userID={3} />
                <Comment comment={commentData} img={'https://loremflickr.com/500/500'} isLiked={false} userID={4} />
                <Comment comment={commentData} img={'https://loremflickr.com/500/500'} isLiked={false} userID={5} />
                <Comment comment={commentData} img={'https://loremflickr.com/500/500'} isLiked={false} userID={6} />
            </Scrollbar>
        </PostCommentsWrapper>
    )
}
