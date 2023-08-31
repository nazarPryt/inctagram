import { forwardRef, useState } from 'react'

import { LikedIcon } from 'features/Post/Likes/icons/LikedIcon'
import { NotLikedIcon } from 'features/Post/Likes/icons/NotLikedIcon'
import { LikeCommentWrapper } from 'features/Post/Likes/LikeComment/LikeComment.styled'
import { IconButtonType } from 'shared/ui/IconButton/IconButton'

type LikeCommentType = Omit<IconButtonType, 'children'> & {
  isLiked: boolean
  commentId: number
}

export const LikeComment = forwardRef<HTMLButtonElement, LikeCommentType>(({ isLiked, ...rest }, ref) => {
  const [like, setLike] = useState(isLiked) // todo remove useState and make it controlled when endpoint will be ready

  const handleClick = (): void => {
    setLike(!like)
    // eslint-disable-next-line no-console
    console.log('comment-is-liked: ', like)
  }

  return (
    <LikeCommentWrapper {...rest} ref={ref} onClick={handleClick}>
      {like ? <LikedIcon /> : <NotLikedIcon />}
    </LikeCommentWrapper>
  )
})

LikeComment.displayName = 'LikeComment'
