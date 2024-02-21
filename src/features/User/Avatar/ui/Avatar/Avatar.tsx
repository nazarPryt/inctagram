import {useState} from 'react'

import {ProfilePhotoModal} from '@/features/User/Avatar/ui/ProfilePhotoModal/ProfilePhotoModal'
import {UserAvatar} from '@/features/User/Avatar/ui/UserAvatar/UserAvatar'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button} from '@nazar-pryt/inctagram-ui-kit'

import {AvatarFormWrapper} from './Avatar.styled'

export const Avatar = ({avatar}: {avatar: string | undefined}) => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalClose = () => {
        setIsModalOpen(false)
    }
    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    return (
        <AvatarFormWrapper>
            <UserAvatar avatar={avatar} />
            <Button onClick={handleModalOpen} type={'button'} variant={'outlined'}>
                {avatar ? t.generalInfo.changeProfilePhoto : t.generalInfo.addProfilePhoto}
            </Button>
            <ProfilePhotoModal handleClose={handleModalClose} isOpen={isModalOpen} title={'Add a Profile Photo'} />
        </AvatarFormWrapper>
    )
}
