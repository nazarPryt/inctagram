import {AddToFavorites} from '@/features/Post/AddToFavorites/AddToFavorites'
import {LikePost} from '@/features/Post/Likes/LikePost/LikePost'
import {Share} from '@/features/Post/Share/Share'
import {ComponentMode} from '@/shared/hooks/useMode'

import {ViewUserPostFeaturesWrapper} from './ViewUserPostFeatures.styled'

type PropsType = {
    mode: ComponentMode
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
