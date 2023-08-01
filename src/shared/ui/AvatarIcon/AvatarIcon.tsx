import Image from 'next/image'
import React from 'react'
import {AvatarIconWrapper} from './AvatarIcon.styled'
import {PATH} from '../../constants/PATH'
import * as process from 'process'
import {EmptyAvatar} from 'shared/assets/icons/emptyAvatar'

type AvatarIconType = {
    img: string
    userID: number
}
export const AvatarIcon = ({img, userID}: AvatarIconType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string
    return (
        <AvatarIconWrapper href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
            {img ? <Image src={img} alt={'user-avatar'} width={36} height={36} /> : <EmptyAvatar />}
        </AvatarIconWrapper>
    )
}
