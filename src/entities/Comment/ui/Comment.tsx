import React from 'react'
import {AvatarIcon} from 'shared/ui/AvatarIcon/AvatarIcon'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {CommentWrapper} from 'entities/Comment/ui/Comment.styled'
import {LikeComment} from 'features/Likes/LikeComment/LikeComment'

type CommentType = {
    comment: string
    userID: number
    img: string
}

export const Comment = ({comment, userID, img}: CommentType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

    return (
        <CommentWrapper>
            <AvatarIcon userID={userID} img={img} />
            <div className={'content'}>
                <Link href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>URLProfile</Link>
                <p>{comment}</p>
                <div className={'footer'}>
                    <div>2 Hours ago</div>
                    <div>Like: 1</div>
                    <div>Answer</div>
                </div>
            </div>
            <LikeComment className={'likeButton'} commentId={33} isLiked={true} />
        </CommentWrapper>
    )
}
