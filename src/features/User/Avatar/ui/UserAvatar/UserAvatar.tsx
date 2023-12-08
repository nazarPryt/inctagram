import {useDeleteUserAvatar} from 'features/User/Avatar/hook/useDeleteUserAvatar'
import Image from 'next/image'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import DeleteAvatarIcon from 'shared/assets/icons/deleteAvatar.svg'
import {EmptyAvatar} from 'shared/assets/icons/emptyAvatar'
import {UserAvatarStyled} from 'features/User/Avatar/ui/UserAvatar/UserAvatar.styled'

export const UserAvatar = ({avatar}: {avatar: string | undefined}) => {
    const {handleDeleteAvatar, isLoading} = useDeleteUserAvatar()

    return (
        <UserAvatarStyled>
            {avatar ? (
                <div className={'avatar'}>
                    <Image src={avatar} alt={'imgUrl'} width={192} height={192} />
                    <IconButton onClick={handleDeleteAvatar} disabled={isLoading}>
                        <DeleteAvatarIcon />
                    </IconButton>
                </div>
            ) : (
                <EmptyAvatar />
            )}
        </UserAvatarStyled>
    )
}
