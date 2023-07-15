import Image from 'next/image'
import React from 'react'
import {AvatarIconWrapper} from 'shared/components/AvatarIcon/AvatarIcon.styled'
import {PATH} from 'shared/constants/PATH'
import * as process from 'process'

type AvatarIconType = {
    img: string
    userID: number
}
export const AvatarIcon = ({img, userID}: AvatarIconType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string
    return (
        <AvatarIconWrapper href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
            <Image src={img} alt={'user-avatar'} width={36} height={36} />
        </AvatarIconWrapper>
    )
}
