import { FC } from 'react'

import Image from 'next/image'

import { useDeleteUserAvatar } from 'features/User/Avatar/hook/useDeleteUserAvatar'
import { UserAvatarStyled } from 'features/User/Avatar/ui/UserAvatar/UserAvatar.styled'
import DeleteAvatarIcon from 'shared/assets/icons/deleteAvatar.svg'
import { EmptyAvatar } from 'shared/assets/icons/emptyAvatar'
import { IconButton } from 'shared/ui/IconButton/IconButton'

export const UserAvatar: FC<{ avatar: string | undefined }> = ({ avatar }) => {
  const { handleDeleteAvatar, isLoading } = useDeleteUserAvatar()

  return (
    <UserAvatarStyled>
      {avatar ? (
        <div className="avatar">
          <Image alt="imgUrl" height={192} src={avatar} width={192} />
          <IconButton disabled={isLoading} onClick={handleDeleteAvatar}>
            <DeleteAvatarIcon />
          </IconButton>
        </div>
      ) : (
        <EmptyAvatar />
      )}
    </UserAvatarStyled>
  )
}
