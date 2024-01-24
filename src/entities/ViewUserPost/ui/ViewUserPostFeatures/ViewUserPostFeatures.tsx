import {ViewUserPostFeaturesWrapper} from 'entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures.styled'
import {AddToFavorites} from 'features/Post/AddToFavorites/AddToFavorites'
import {LikePost} from 'features/Post/Likes/LikePost/LikePost'
import {Share} from 'features/Share/Share'

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
