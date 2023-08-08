import * as Dialog from '@radix-ui/react-dialog'
import {useDeleteUserPostMutation} from 'entities/UserPosts/api/user-posts-api'
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogTitle,
    ViewUserPostHeaderWrapper,
    WrapperButton,
} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader.styled'
import {DeletePostIcon} from 'features/DeletePost/DeletePostIcon'
import {EditPostIcon} from 'features/EditPost/EditPostIcon'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {Dispatch, SetStateAction, useState} from 'react'
import {CloseIcon} from 'shared/assets/icons/CloseIcon'
import {PATH} from 'shared/constants/PATH'
import {AvatarIcon} from 'shared/ui/AvatarIcon/AvatarIcon'
import {Button} from 'shared/ui/Button/Button'
import {Popover} from 'shared/ui/Popover/Popover'
import {PopoverItem} from 'shared/ui/Popover/PopoverItem/PopoverItem'

type PropsType = {
    userId: number
    postId: number
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({userId, postId, setEdit, edit}: PropsType) => {
    const router = useRouter()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [deletePost] = useDeleteUserPostMutation()
    const handleEditPost = () => {
        setEdit(true)
        console.log('handleEditPost')
        console.log('postId', postId)
        setIsPopoverOpen(false)
    }
    const handleDeletePost = () => {
        console.log('postId', postId)
        console.log('handleDeletePost')
        deletePost(postId)
            .then(() => {
                setModalIsOpen(true)
                setIsPopoverOpen(false)
                router.push('/profile/my-profile')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Dialog.Root modal={true} onOpenChange={e => setModalIsOpen(e)} open={modalIsOpen}>
                <Dialog.Portal>
                    <DialogOverlay />
                    <DialogContent>
                        <DialogTitle>
                            Delete Post
                            <DialogClose>
                                <CloseIcon />
                            </DialogClose>
                        </DialogTitle>
                        <DialogDescription>Are you sure you want to delete this post?</DialogDescription>
                        <WrapperButton>
                            <Button variant={'outlined'} onClick={handleDeletePost}>
                                Yes
                            </Button>
                            <Button onClick={() => setModalIsOpen(false)}>No</Button>
                        </WrapperButton>
                    </DialogContent>
                </Dialog.Portal>
            </Dialog.Root>
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
