import React from 'react'
import {ViewUserPostFeaturesWrapper} from 'entities/ViewUserPost/ui/ViewUserPostFeatures/ViewUserPostFeatures.styled'
import {LikePost} from 'features/Likes/LikePost/LikePost'
import {Share} from 'features/Share/Share'
import {AddToFavorites} from 'features/AddToFavorites/AddToFavorites'

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
