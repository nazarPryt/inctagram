import { NotLikedIcon } from 'features/Post/Likes/icons/NotLikedIcon'
import { IconButton } from 'shared/ui/IconButton/IconButton'

export const LikePost = (): JSX.Element => {
  return (
    <IconButton>
      <NotLikedIcon />
    </IconButton>
  )
}
