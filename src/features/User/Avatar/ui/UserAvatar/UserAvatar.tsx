import {DeleteAvatar, Dialog, EmptyAvatar, IconButton} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

import {useDeleteUserAvatar} from '../../hook/useDeleteUserAvatar'
import {UserAvatarStyled} from './UserAvatar.styled'

export const UserAvatar = ({avatar}: {avatar: string | undefined}) => {
    const {dialog, handleCloseDialog, handleDeleteAvatar, handleOpenDialog, isLoading} = useDeleteUserAvatar()

    return (
        <>
            <UserAvatarStyled>
                {avatar ? (
                    <div className={'avatar'}>
                        <Image alt={'imgUrl'} height={192} src={avatar} width={192} />
                        <IconButton disabled={isLoading} onClick={handleOpenDialog}>
                            <DeleteAvatar />
                        </IconButton>
                    </div>
                ) : (
                    <EmptyAvatar />
                )}
            </UserAvatarStyled>
            <Dialog
                cancelButtonText={'No'}
                confirmButtonText={'Yes'}
                onCancelButtonClick={handleCloseDialog}
                onConfirmButtonClick={handleDeleteAvatar}
                open={dialog}
                title={'Delete user Avatar'}
            >
                <p>Do you really want to delete your avatar?</p>
            </Dialog>
        </>
    )
}
