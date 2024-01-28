import {AddToFavorites} from '@/features/Post/AddToFavorites/AddToFavorites'
import {CommentPost} from '@/features/Post/CommentPost/ui/CommentPost'
import {LikePost} from '@/features/Post/Likes/LikePost/LikePost'
import {Share} from '@/features/Share/Share'

import {PostFeaturesWrapper} from './PostFeatures.styled'

export const PostFeatures = () => {
    return (
        <PostFeaturesWrapper>
            <div>
                <LikePost />
                <CommentPost />
                <Share />
            </div>
            <AddToFavorites />
        </PostFeaturesWrapper>
    )
}
