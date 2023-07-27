import React, {ComponentProps} from 'react'
import {UserPostWrapper} from 'entities/UserPosts/ui/UserPost.styled'
import Image from 'next/image'

type UserPostType = {
    src: string
} & ComponentProps<'a'>

export const UserPost = ({src, ...rest}: UserPostType) => {
    return (
        <UserPostWrapper {...rest}>
            <Image src={src} alt={'PostPhoto'} width={230} height={235} />
        </UserPostWrapper>
    )
}
