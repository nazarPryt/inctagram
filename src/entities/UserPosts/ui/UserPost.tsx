import React from 'react'
import {UserPostWrapper} from 'entities/UserPosts/ui/UserPost.styled'
import Image from 'next/image'
import {MorePhotosIcon} from './MorePhotosIcon/MorePhotosIcon'

type UserPostType = {
    src: string
    imagesLength: number
}

export const UserPost = ({src, imagesLength}: UserPostType) => {
    return (
        <UserPostWrapper>
            {imagesLength > 2 && <MorePhotosIcon />}
            <Image src={src} alt={'PostPhoto'} width={230} height={235} />
        </UserPostWrapper>
    )
}
