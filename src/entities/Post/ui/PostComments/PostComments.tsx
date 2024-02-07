import {Comment} from '@/entities/Comment/ui/Comment'
import {Scrollbar} from '@nazar-pryt/inctagram-ui-kit'

import {PostCommentsWrapper} from './PostComments.styled'

type PostDescriptionType = {}
export const PostComments = ({}: PostDescriptionType) => {
    return (
        <PostCommentsWrapper>
            <Scrollbar maxHeight={200}>
                <Comment comment={'post.description'} img={'https://loremflickr.com/500/500'} isLiked userID={1} />
                <Comment
                    comment={'post.description'}
                    img={'https://loremflickr.com/500/500'}
                    isLiked={false}
                    userID={2}
                />
                <Comment comment={'post.description'} img={'https://loremflickr.com/500/500'} isLiked userID={3} />
                <Comment
                    comment={'post.description'}
                    img={'https://loremflickr.com/500/500'}
                    isLiked={false}
                    userID={4}
                />
                <Comment
                    comment={'post.description'}
                    img={'https://loremflickr.com/500/500'}
                    isLiked={false}
                    userID={5}
                />
                <Comment
                    comment={'post.description'}
                    img={'https://loremflickr.com/500/500'}
                    isLiked={false}
                    userID={6}
                />
            </Scrollbar>
        </PostCommentsWrapper>
    )
}
