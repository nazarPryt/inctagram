import {forwardRef} from 'react'

import {MorePhotos} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'
import {useRouter} from 'next/router'

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
            {props.imagesLength > 2 && (
                <span className={'morePhotos'}>
                    <MorePhotos />
                </span>
            )}
            <Image alt={'PostPhoto'} height={235} src={props.src} width={230} />
        </UserPostWrapper>
    )
})

UserPost.displayName = 'UserPost'
