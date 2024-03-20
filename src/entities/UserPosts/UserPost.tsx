import {forwardRef, useState} from 'react'

import brokenImage from '@/public/pictures/brokenImage.webp'
import {MorePhotos} from '@nazar-pryt/inctagram-ui-kit'
import Image, {StaticImageData} from 'next/image'
import {useRouter} from 'next/router'

import {UserPostWrapper} from './UserPost.styled'

type UserPostType = {
    imagesLength: number
    postId: number
    src: string
}

export const UserPost = forwardRef<HTMLAnchorElement, UserPostType>((props, ref) => {
    const [image, setImage] = useState<StaticImageData | string>(props.src)
    const {asPath} = useRouter()

    return (
        <UserPostWrapper href={`${asPath}/${props.postId}`} ref={ref}>
            {props.imagesLength > 2 && (
                <span className={'morePhotos'}>
                    <MorePhotos />
                </span>
            )}
            <Image
                alt={'PostPhoto'}
                height={235}
                onError={() => {
                    setImage(brokenImage)
                }}
                src={image}
                width={230}
            />
        </UserPostWrapper>
    )
})

UserPost.displayName = 'UserPost'
