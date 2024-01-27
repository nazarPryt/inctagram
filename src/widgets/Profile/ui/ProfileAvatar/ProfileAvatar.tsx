import {EmptyAvatar} from '@/shared/assets/icons/emptyAvatar'
import {ProfileAvatarWrapper} from '@/widgets/Profile/ui/ProfileAvatar/ProfileAvatar.styled'
import Image from 'next/image'

export const ProfileAvatar = ({src}: {src: string | undefined}) => {
    return (
        <ProfileAvatarWrapper>
            {src ? <Image alt={'ProfileAvatar'} height={205} src={src} width={205} /> : <EmptyAvatar />}
        </ProfileAvatarWrapper>
    )
}
