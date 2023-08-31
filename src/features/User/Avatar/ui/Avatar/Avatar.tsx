import { FC, useState } from 'react'

import { AvatarFormWrapper } from 'features/User/Avatar/ui/Avatar/Avatar.styled'
import { ProfilePhotoModal } from 'features/User/Avatar/ui/ProfilePhotoModal/ProfilePhotoModal'
import { UserAvatar } from 'features/User/Avatar/ui/UserAvatar/UserAvatar'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'

export const Avatar: FC<{ avatar: string | undefined }> = ({ avatar }): JSX.Element => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalClose = (): void => {
    setIsModalOpen(false)
  }
  const handleModalOpen = (): void => {
    setIsModalOpen(true)
  }

  return (
    <AvatarFormWrapper>
      <UserAvatar avatar={avatar} />
      <Button type="button" variant="outlined" onClick={handleModalOpen}>
        {t.generalInfo.addProfilePhoto}
      </Button>
      <ProfilePhotoModal handleClose={handleModalClose} isOpen={isModalOpen} title="Add a Profile Photo" />
    </AvatarFormWrapper>
  )
}
