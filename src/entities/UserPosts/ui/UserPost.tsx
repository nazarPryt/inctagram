import {forwardRef} from 'react'

import {PATH} from '@/shared/constants/PATH'
import Image from 'next/image'

import {MorePhotosIcon} from './MorePhotosIcon/MorePhotosIcon'
import {UserPostWrapper} from './UserPost.styled'

type UserPostType = {
    imagesLength: number
    postId: number
    src: string
}

export const UserPost = forwardRef<HTMLAnchorElement, UserPostType>((props, ref) => {
    return (
        <UserPostWrapper href={`${PATH.VIEW_POST}/${props.postId}`} ref={ref}>
            {props.imagesLength > 2 && <MorePhotosIcon />}
            <Image alt={'PostPhoto'} height={235} src={props.src} width={230} />
        </UserPostWrapper>
    )
})

UserPost.displayName = 'UserPost'
