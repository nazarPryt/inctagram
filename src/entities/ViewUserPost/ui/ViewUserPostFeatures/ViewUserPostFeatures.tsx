import {AddToFavorites} from '@/features/Post/AddToFavorites/AddToFavorites'
import {LikePost} from '@/features/Post/Likes/LikePost/LikePost'
import {Share} from '@/features/Share/Share'

import {ViewUserPostFeaturesWrapper} from './ViewUserPostFeatures.styled'

export const ViewUserPostFeatures = () => {
    return (
        <ViewUserPostFeaturesWrapper>
            <div>
                <LikePost />
                <Share />
            </div>
            <AddToFavorites />
        </ViewUserPostFeaturesWrapper>
    )
}
