import {IconButton} from 'shared/ui/IconButton/IconButton'
import {NotLikedIcon} from 'features/Post/Likes/icons/NotLikedIcon'

export const LikePost = () => {
    return (
        <IconButton>
            <NotLikedIcon />
        </IconButton>
    )
}
