import {PostByIdType} from '@/entities/ViewUserPost/api/type'
import {AddToFavorites} from '@/features/Post/AddToFavorites/AddToFavorites'
import {LikePost} from '@/features/Post/Likes/LikePost/LikePost'
import {Share} from '@/features/Share/Share'
import {ProfileHeaderMode} from '@/widgets/Profile/ui/ProfileHeader/ProfileHeader'

import {ViewUserPostFeaturesWrapper} from './ViewUserPostFeatures.styled'

type PropsType = {
    mode: ProfileHeaderMode
}
export const ViewUserPostFeatures = ({mode}: PropsType) => {
    if (mode === 'myProfile') {
        return (
            <ViewUserPostFeaturesWrapper>
                <div className={'box'}>
                    <LikePost />
                    <Share />
                </div>
                <AddToFavorites />
            </ViewUserPostFeaturesWrapper>
        )
    }

    return null
}
