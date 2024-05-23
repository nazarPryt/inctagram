import {forwardRef, useState} from 'react'

import {UserPostItemType} from '@/entities/UserPosts/helpers/UserPosts.schema'
import brokenImage from '@/public/pictures/brokenImage.webp'
import {MorePhotos} from '@nazar-pryt/inctagram-ui-kit'
import Image, {StaticImageData} from 'next/image'
import {useRouter} from 'next/router'

import {UserPostWrapper} from './UserPost.styled'

type UserPostType = {
    post: UserPostItemType
}

export const UserPost = forwardRef<HTMLAnchorElement, UserPostType>(({post}, ref) => {
    const [image, setImage] = useState<StaticImageData | string>(post.images[0]?.url ?? '')
    const {asPath} = useRouter()

    return (
        <UserPostWrapper href={`${asPath}/${post.id}`} ref={ref}>
            {post.images.length > 2 && (
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
