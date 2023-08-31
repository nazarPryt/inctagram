import { forwardRef } from 'react'

import Image from 'next/image'

import { MorePhotosIcon } from './MorePhotosIcon/MorePhotosIcon'

import { UserPostWrapper } from 'entities/UserPosts/ui/UserPost.styled'
import { PATH } from 'shared/constants/PATH'

type UserPostType = {
  src: string
  imagesLength: number
  postId: number
}

export const UserPost = forwardRef<HTMLAnchorElement, UserPostType>((props, ref) => {
  return (
    <UserPostWrapper ref={ref} href={{ pathname: `${PATH.VIEW_POST}/${encodeURIComponent(props.postId)}` }}>
      {props.imagesLength > 2 && <MorePhotosIcon />}
      <Image alt="PostPhoto" height={235} src={props.src} width={230} />
    </UserPostWrapper>
  )
})

UserPost.displayName = 'UserPost'
