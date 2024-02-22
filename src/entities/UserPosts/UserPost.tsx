import {forwardRef} from 'react'

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

export const MorePhotos = () => {
    // todo remove MorePhotos and make import from ui-kit
    return (
        <svg color={'black'} fill={'white'} height={'22'} role={'img'} viewBox={'0 0 48 48'} width={'22'}>
            <path
                d={
                    'M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z'
                }
            ></path>
        </svg>
    )
}
