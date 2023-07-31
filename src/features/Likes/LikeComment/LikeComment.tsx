import React, {forwardRef, useState} from 'react'
import {LikeIcon} from 'features/Likes/icons/LikeIcon'
import {LikeCommentWrapper} from 'features/Likes/LikeComment/LikeComment.styled'
import {IconButtonType} from 'shared/ui/IconButton/IconButton'

type LikeCommentType = {
    isLiked: boolean
    commentId: number
} & Omit<IconButtonType, 'children'>

export const LikeComment = forwardRef<HTMLButtonElement, LikeCommentType>(({commentId, isLiked, ...rest}, ref) => {
    const [like, setLike] = useState(isLiked)

    const handleClick = () => {
        setLike(!like)
        console.log('comment-is-liked', like)
    }
    return (
        <LikeCommentWrapper {...rest} ref={ref} onClick={handleClick}>
            <LikeIcon />
        </LikeCommentWrapper>
    )
})

LikeComment.displayName = 'LikeComment'
