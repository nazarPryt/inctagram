import {ViewUserPostHeaderWrapper} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader.styled'
import {DeletePostIcon} from 'features/DeletePost/ui/icon/DeletePostIcon'
import {EditPostIcon} from 'features/EditPost/EditPostIcon'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {Dispatch, SetStateAction, useState} from 'react'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import {AvatarIcon} from 'shared/ui/AvatarIcon/AvatarIcon'
import {Popover} from 'shared/ui/Popover/Popover'
import {PopoverItem} from 'shared/ui/Popover/PopoverItem/PopoverItem'
import {useDeletePostMutation} from 'features/DeletePost/api/DeletePost.api'
import {DeletePostModal} from 'features/DeletePost/ui/DeletePostModal/DeletePostModal'

type PropsType = {
    userId: number
    postId: number
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({userId, postId, setEdit, edit}: PropsType) => {
    const {t} = useTranslation()
    const router = useRouter()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [deletePost] = useDeletePostMutation()

    const handleEditPost = () => {
        setEdit(true)
        setIsPopoverOpen(false)
    }
    const handleModalClose = () => {
        setModalIsOpen(false)
    }
    const handleDeletePost = () => {
        deletePost(postId)
            .then(() => {
                setModalIsOpen(true)
                setIsPopoverOpen(false)
                router.push(PATH.MY_PROFILE)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <DeletePostModal
                isOpen={modalIsOpen}
                handleModalClose={handleModalClose}
                handleDeletePost={handleDeletePost}
            />
            <ViewUserPostHeaderWrapper>
                <div className={'avaLink'}>
                    <AvatarIcon img={'https://loremflickr.com/500/500'} userID={userId} />
                    <Link className={'link'} href={`${PATH.USER_PROFILE}/${userId}`}>
                        URLProfile
                    </Link>
                </div>
                {!edit && (
                    <Popover setIsPopoverOpen={setIsPopoverOpen} isPopoverOpen={isPopoverOpen}>
                        <PopoverItem onClick={handleEditPost} name={'Edit Post'} icon={<EditPostIcon />} />
                        <PopoverItem
                            onClick={() => setModalIsOpen(true)}
                            name={'Delete Post'}
                            icon={<DeletePostIcon />}
                        />
                    </Popover>
                )}
            </ViewUserPostHeaderWrapper>
        </>
    )
}
