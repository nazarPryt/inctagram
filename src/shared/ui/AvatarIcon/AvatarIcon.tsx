import * as process from 'process'

import Image from 'next/image'

import { PATH } from '../../constants/PATH'

import { AvatarIconWrapper } from './AvatarIcon.styled'

import { EmptyAvatar } from 'shared/assets/icons/emptyAvatar'

type AvatarIconType = {
  img: string
  userID: number
}
export const AvatarIcon = ({ img, userID }: AvatarIconType): JSX.Element => {
  const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

  return (
    <AvatarIconWrapper href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
      {img ? <Image alt="user-avatar" height={36} src={img} width={36} /> : <EmptyAvatar />}
    </AvatarIconWrapper>
  )
}
