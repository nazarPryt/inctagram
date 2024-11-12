import {Dispatch, SetStateAction, useState} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {useDeleteUserPost} from '@/features/Post/DeletePost/hook/useDeleteUserPost'
import {DeletePostModal} from '@/features/Post/DeletePost/ui/DeletePostModal/DeletePostModal'
import {DeletePostIcon} from '@/features/Post/DeletePost/ui/icon/DeletePostIcon'
import {EditPostIcon} from '@/features/Post/EditPost/ui/icon/EditPostIcon'
import {useMode} from '@/shared/hooks/useMode'
import {Avatar, DotsHorizontal, Popover, PopoverItem} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostByIdType} from '../../api/getPost.types'
import {ViewUserPostHeaderWrapper} from './ViewUserPostHeader.styled'

type PropsType = {
    edit: boolean
    post: PostByIdType
    setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({edit, post, setEdit}: PropsType) => {
    const {mode} = useMode(post.ownerId)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen} = useDeleteUserPost({
        isModal: true,
        postId: post.id,
    })
    const handleEditPost = () => {
        setEdit(true)
        setIsPopoverOpen(false)
    }

    const showPopover = !edit && mode === 'myProfile'
    const userLink =
        mode === 'publick' ? `/${PATH.PUBLIC.PROFILE}/${post.ownerId}` : `${PATH.USER_PROFILE}/${post.ownerId}`

    return (
        <>
            <DeletePostModal
                handleDeletePost={handleDeletePost}
                handleModalClose={handleModalClose}
                isOpen={modalIsOpen}
            />
            <ViewUserPostHeaderWrapper>
                <div className={'avaLink'}>
                    <Avatar alt={`${post.userName} avatar`} size={40} src={post.avatarOwner} userName={post.userName} />
                    <Link className={'link'} href={userLink}>
                        {post.userName}
                    </Link>
                </div>
                {showPopover && (
                    <Popover icon={<DotsHorizontal />} isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                        <PopoverItem icon={<EditPostIcon />} name={'Edit Post'} onClick={handleEditPost} />
                        <PopoverItem icon={<DeletePostIcon />} name={'Delete Post'} onClick={handleModalOpen} />
                    </Popover>
                )}
            </ViewUserPostHeaderWrapper>
        </>
    )
}
