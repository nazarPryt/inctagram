import {PostFeaturesWrapper} from '@/entities/Post/ui/PostFeatures/PostFeatures.styled'
import {AddToFavorites} from '@/features/Post/AddToFavorites/AddToFavorites'
import {CommentPost} from '@/features/Post/CommentPost/ui/CommentPost'
import {LikePost} from '@/features/Post/Likes/LikePost/LikePost'
import {Share} from '@/features/Share/Share'

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
