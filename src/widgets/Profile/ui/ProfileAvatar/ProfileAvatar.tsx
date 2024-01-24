import Image from 'next/image'
import {ProfileAvatarWrapper} from 'widgets/Profile/ui/ProfileAvatar/ProfileAvatar.styled'

import {EmptyAvatar} from '../../../../shared/assets/icons/emptyAvatar'

export const ProfileAvatar = ({src}: {src: string | undefined}) => {
    return (
        <ProfileAvatarWrapper>
            {src ? <Image alt={'ProfileAvatar'} height={205} src={src} width={205} /> : <EmptyAvatar />}
        </ProfileAvatarWrapper>
    )
}
