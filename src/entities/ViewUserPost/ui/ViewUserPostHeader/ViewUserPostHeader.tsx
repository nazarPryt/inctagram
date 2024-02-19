import {Dispatch, SetStateAction, useState} from 'react'

import {useDeleteUserPost} from '@/features/Post/DeletePost/hook/useDeleteUserPost'
import {DeletePostModal} from '@/features/Post/DeletePost/ui/DeletePostModal/DeletePostModal'
import {DeletePostIcon} from '@/features/Post/DeletePost/ui/icon/DeletePostIcon'
import {EditPostIcon} from '@/features/Post/EditPost/ui/icon/EditPostIcon'
import {PATH} from '@/shared/constants/PATH'
import {ComponentMode, useMode} from '@/shared/hooks/useMode'
import {Avatar, DotsHorizontal, Popover, PopoverItem} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostByIdType} from '../../api/type'
import {ViewUserPostHeaderWrapper} from './ViewUserPostHeader.styled'

type PropsType = {
    data: PostByIdType
    edit: boolean
    mode: ComponentMode
    setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({data, edit, mode, setEdit}: PropsType) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen} = useDeleteUserPost(data.id as number)
    const handleEditPost = () => {
        setEdit(true)
        setIsPopoverOpen(false)
    }

    const showPopover = !edit && mode === 'myProfile'

    return (
        <>
            <DeletePostModal
                handleDeletePost={handleDeletePost}
                handleModalClose={handleModalClose}
                isOpen={modalIsOpen}
            />
            <ViewUserPostHeaderWrapper>
                <div className={'avaLink'}>
                    <Avatar alt={`${data.userName} avatar`} size={40} src={data.avatarOwner} userName={data.userName} />
                    <Link className={'link'} href={`${PATH.USER_PROFILE}/${data.ownerId}`}>
                        {data.userName}
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
