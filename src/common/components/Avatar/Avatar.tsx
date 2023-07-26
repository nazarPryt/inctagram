import React, {FC, useState} from 'react'
import {AvatarFormWrapper} from 'common/components/Avatar/styled'
import {ProfilePhotoModal} from 'common/components/Avatar/ProfilePhotoModal'
import Image from 'next/image'
import styled from 'styled-components'
import {IconButton} from 'shared/components/IconButton/IconButton'
import DeleteAvatarIcon from 'common/assets/icons/deleteAvatar.svg'
import {useDeleteAvatarMutation} from 'redux/api/profileAPI'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {Button} from 'shared/components/Button/Button'
import {EmptyAvatar} from 'common/assets/icons/emptyAvatar'

export const Avatar: FC<{avatar: string | undefined}> = ({avatar}) => {
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
                Add a Profile Photo
            </Button>
            <ProfilePhotoModal title={'Add a Profile Photo'} isOpen={isModalOpen} handleClose={handleModalClose} />
        </AvatarFormWrapper>
    )
}

export const UserAvatar: FC<{avatar: string | undefined}> = ({avatar}) => {
    const dispatch = useAppDispatch()

    const [deleteAvatar, {isLoading}] = useDeleteAvatarMutation()
    const handleDeleteAvatar = () => {
        deleteAvatar({})
            .unwrap()
            .then(() => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'success', message: 'Your Avatar was successfully removed'},
                    })
                )
            })
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 192px;
    border-radius: 50%;
    margin-bottom: 30px;
    background-color: ${props => props.theme.bodyColor['500']};

    .avatar {
        position: relative;

        img {
            border-radius: 50%;
        }

        button {
            position: absolute;
            top: 0;
            right: 20px;
        }
    }
`
