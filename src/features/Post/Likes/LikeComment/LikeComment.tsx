import {forwardRef, useState} from 'react'

import {LikeCommentWrapper} from '@/features/Post/Likes/LikeComment/LikeComment.styled'
import {LikedIcon} from '@/features/Post/Likes/icons/LikedIcon'
import {NotLikedIcon} from '@/features/Post/Likes/icons/NotLikedIcon'
import {IconButtonType} from '@/shared/ui/IconButton/IconButton'

type LikeCommentType = {
    commentId: number
    isLiked: boolean
} & Omit<IconButtonType, 'children'>

export const LikeComment = forwardRef<HTMLButtonElement, LikeCommentType>(({commentId, isLiked, ...rest}, ref) => {
    const [like, setLike] = useState(isLiked) //todo remove useState and make it controlled when endpoint will be ready

    const handleClick = () => {
        setLike(!like)
        console.log('comment-is-liked: ', like)
    }

    return (
        <LikeCommentWrapper {...rest} onClick={handleClick} ref={ref}>
            {like ? <LikedIcon /> : <NotLikedIcon />}
        </LikeCommentWrapper>
    )
})

LikeComment.displayName = 'LikeComment'
