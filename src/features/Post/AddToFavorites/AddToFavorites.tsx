import { FavoriteIcon } from 'features/Post/AddToFavorites/FavoriteIcon'
import { IconButton } from 'shared/ui/IconButton/IconButton'

export const AddToFavorites = (): JSX.Element => {
  return (
    <IconButton>
      <FavoriteIcon />
    </IconButton>
  )
}
