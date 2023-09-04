import React, {FC, useState} from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import {AvatarFormWrapper} from 'features/User/Avatar/ui/Avatar/Avatar.styled'
import {ProfilePhotoModal} from 'features/User/Avatar/ui/ProfilePhotoModal/ProfilePhotoModal'
import {Button} from 'shared/ui/Button/Button'
import {UserAvatar} from 'features/User/Avatar/ui/UserAvatar/UserAvatar'

export const Avatar: FC<{avatar: string | undefined}> = ({avatar}) => {
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
            <Button type='button' variant={'outlined'} onClick={handleModalOpen}>
                {t.generalInfo.addProfilePhoto}
            </Button>
            <ProfilePhotoModal title={'Add a Profile Photo'} isOpen={isModalOpen} handleClose={handleModalClose} />
        </AvatarFormWrapper>
    )
}
