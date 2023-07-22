import React from 'react'
import Image from 'next/image'
import {ProfileAvatarWrapper} from 'widgets/Profile/ui/ProfileAvatar/ProfileAvatar.styled'

export const ProfileAvatar = (props: {src: string}) => {
    return (
        <ProfileAvatarWrapper>
            <Image src={props.src} alt={'ProfileAvatar'} width={205} height={205} />
        </ProfileAvatarWrapper>
    )
}
