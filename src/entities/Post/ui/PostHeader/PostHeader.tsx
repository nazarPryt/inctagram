import React from 'react'
import {PostHeaderWrapper} from 'entities/Post/ui/PostHeader/PostHeader.styled'
import {PopOverIcon} from 'entities/Post/ui/PostHeader/popOverIcon'
import {IconButton} from 'shared/components/IconButton/IconButton'
import {AvatarIcon} from 'shared/components/AvatarIcon/AvatarIcon'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'

type PostHeaderType = {
    img: string
    userID: number
}
export const PostHeader = ({img, userID}: PostHeaderType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

    return (
        <PostHeaderWrapper>
            <div>
                <AvatarIcon img={img} userID={userID} />
                <Link href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>URLProfiele</Link>
                <span>22 Minutes ago</span>
            </div>
            <IconButton>
                <PopOverIcon />
            </IconButton>
        </PostHeaderWrapper>
    )
}
