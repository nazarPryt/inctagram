import {forwardRef, useState} from 'react'
import {NotLikedIcon} from 'features/Post/Likes/icons/NotLikedIcon'
import {LikeCommentWrapper} from 'features/Post/Likes/LikeComment/LikeComment.styled'
import {IconButtonType} from 'shared/ui/IconButton/IconButton'
import {LikedIcon} from 'features/Post/Likes/icons/LikedIcon'

type LikeCommentType = {
    isLiked: boolean
    commentId: number
} & Omit<IconButtonType, 'children'>

export const LikeComment = forwardRef<HTMLButtonElement, LikeCommentType>(({commentId, isLiked, ...rest}, ref) => {
    const [like, setLike] = useState(isLiked) //todo remove useState and make it controlled when endpoint will be ready

    const handleClick = () => {
        setLike(!like)
        console.log('comment-is-liked: ', like)
    }
    return (
        <LikeCommentWrapper {...rest} ref={ref} onClick={handleClick}>
            {like ? <LikedIcon /> : <NotLikedIcon />}
        </LikeCommentWrapper>
    )
})

LikeComment.displayName = 'LikeComment'
