import React from 'react'
import {UserPostWrapper} from 'entities/UserPosts/ui/UserPost.styled'
import Image from 'next/image'

type UserPostType = {
    src: string
}

export const UserPost = ({src}: UserPostType) => {
    return (
        <UserPostWrapper>
            <Image src={src} alt={'PostPhoto'} width={230} height={235} />
        </UserPostWrapper>
    )
}
