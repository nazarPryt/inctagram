import {AddToFavorites} from '@/features/Post/AddToFavorites/AddToFavorites'
import {CommentPost} from '@/features/Post/CommentPost/ui/CommentPost'
import {LikePost} from '@/features/Post/Likes/LikePost/ui/LikePost'
import {Share} from '@/features/Post/Share/Share'

import {PostFeaturesWrapper} from './PostFeatures.styled'

type Props = {
    isLiked: boolean
    postId: number
}
export const PostFeatures = ({isLiked, postId}: Props) => {
    return (
        <PostFeaturesWrapper>
            <div className={'features'}>
                <LikePost isLiked={isLiked} postId={postId} />
                <CommentPost />
                <Share />
            </div>
            <AddToFavorites />
        </PostFeaturesWrapper>
    )
}
