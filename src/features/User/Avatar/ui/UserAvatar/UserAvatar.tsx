import {useDeleteUserAvatar} from '@/features/User/Avatar/hook/useDeleteUserAvatar'
import {UserAvatarStyled} from '@/features/User/Avatar/ui/UserAvatar/UserAvatar.styled'
import {DeleteAvatar, EmptyAvatar, IconButton} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

export const UserAvatar = ({avatar}: {avatar: string | undefined}) => {
    const {handleDeleteAvatar, isLoading} = useDeleteUserAvatar()

    return (
        <UserAvatarStyled>
            {avatar ? (
                <div className={'avatar'}>
                    <Image alt={'imgUrl'} height={192} src={avatar} width={192} />
                    <IconButton disabled={isLoading} onClick={handleDeleteAvatar}>
                        <DeleteAvatar />
                    </IconButton>
                </div>
            ) : (
                <EmptyAvatar />
            )}
        </UserAvatarStyled>
    )
}
