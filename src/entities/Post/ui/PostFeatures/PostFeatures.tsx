import React from 'react'
import {PostFeaturesWrapper} from 'entities/Post/ui/PostFeatures/PostFeatures.styled'
import {AddToFavorites} from 'features/AddToFavorites/AddToFavorites'
import {LikePost} from 'features/Likes/LikePost/LikePost'
import {Share} from 'features/Share/Share'
import {CommentPost} from 'features/CommentPost/CommentPost'

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
