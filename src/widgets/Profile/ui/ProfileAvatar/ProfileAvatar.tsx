import React from 'react'
import Image from 'next/image'
import {ProfileAvatarWrapper} from 'widgets/Profile/ui/ProfileAvatar/ProfileAvatar.styled'
import {EmptyAvatar} from '../../../../shared/assets/icons/emptyAvatar'

export const ProfileAvatar = ({src}: {src: string | undefined}) => {
    return (
        <ProfileAvatarWrapper>
            {src ? <Image src={src} alt={'ProfileAvatar'} width={205} height={205} /> : <EmptyAvatar />}
        </ProfileAvatarWrapper>
    )
}
