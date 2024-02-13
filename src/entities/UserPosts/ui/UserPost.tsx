import {forwardRef, useState} from 'react'

import {ViewUserPost} from '@/entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from '@/entities/ViewUserPost/api/get-post-api'
import {PATH} from '@/shared/constants/PATH'
import {UserPostsModal} from '@/widgets/UserPostsModal/UserPostsModal'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'
import {useRouter} from 'next/router'

import {MorePhotosIcon} from './MorePhotosIcon/MorePhotosIcon'
import {UserPostWrapper} from './UserPost.styled'

type UserPostType = {
    imagesLength: number
    postId: number
    src: string
}

export const UserPost = forwardRef<HTMLAnchorElement, UserPostType>((props, ref) => {
    const {asPath} = useRouter()

    return (
        <UserPostWrapper href={`${asPath}/${props.postId}`} ref={ref}>
            {props.imagesLength > 2 && <MorePhotosIcon />}
            <Image alt={'PostPhoto'} height={235} src={props.src} width={230} />
        </UserPostWrapper>
    )
})

UserPost.displayName = 'UserPost'
