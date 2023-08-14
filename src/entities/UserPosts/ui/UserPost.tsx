import React, {forwardRef} from 'react'
import {UserPostWrapper} from 'entities/UserPosts/ui/UserPost.styled'
import Image from 'next/image'
import {MorePhotosIcon} from './MorePhotosIcon/MorePhotosIcon'
import {PATH} from 'shared/constants/PATH'

type UserPostType = {
    src: string
    imagesLength: number
    postId: number
}

export const UserPost = forwardRef<HTMLAnchorElement, UserPostType>((props, ref) => {
    return (
        <UserPostWrapper href={{pathname: `${PATH.VIEW_POST}/${encodeURIComponent(props.postId)}`}} ref={ref}>
            {props.imagesLength > 2 && <MorePhotosIcon />}
            <Image src={props.src} alt={'PostPhoto'} width={230} height={235} />
        </UserPostWrapper>
    )
})

UserPost.displayName = 'UserPost'
