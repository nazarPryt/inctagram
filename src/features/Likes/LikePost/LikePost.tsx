import React from 'react'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import {NotLikedIcon} from 'features/Likes/icons/NotLikedIcon'

export const LikePost = () => {
    return (
        <IconButton>
            <NotLikedIcon />
        </IconButton>
    )
}
