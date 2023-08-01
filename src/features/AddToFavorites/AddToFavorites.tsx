import React from 'react'
import {IconButton} from '../../shared/ui/IconButton/IconButton'
import {FavoriteIcon} from 'features/AddToFavorites/FavoriteIcon'

export const AddToFavorites = () => {
    return (
        <IconButton>
            <FavoriteIcon />
        </IconButton>
    )
}
