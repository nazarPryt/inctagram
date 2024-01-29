import * as process from 'process'

import {EmptyAvatar} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

import {PATH} from '../../constants/PATH'
import {AvatarIconWrapper} from './AvatarIcon.styled'

type AvatarIconType = {
    img: string
    userID: null | number
}
export const AvatarIcon = ({img, userID}: AvatarIconType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

    return (
        <AvatarIconWrapper href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
            {img ? <Image alt={'user-avatar'} height={36} src={img} width={36} /> : <EmptyAvatar />}
        </AvatarIconWrapper>
    )
}
