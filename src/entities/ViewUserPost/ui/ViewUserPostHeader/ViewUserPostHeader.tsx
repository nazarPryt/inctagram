import {Dispatch, SetStateAction, useState} from 'react'

import {useDeleteUserPost} from '@/features/Post/DeletePost/hook/useDeleteUserPost'
import {DeletePostModal} from '@/features/Post/DeletePost/ui/DeletePostModal/DeletePostModal'
import {DeletePostIcon} from '@/features/Post/DeletePost/ui/icon/DeletePostIcon'
import {EditPostIcon} from '@/features/Post/EditPost/ui/icon/EditPostIcon'
import {PATH} from '@/shared/constants/PATH'
import {AvatarIcon} from '@/shared/ui/AvatarIcon/AvatarIcon'
import {DotsHorizontal, Popover, PopoverItem} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostByIdType} from '../../api/type'
import {ViewUserPostHeaderWrapper} from './ViewUserPostHeader.styled'

type PropsType = {
    data: PostByIdType
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    userId: null | number
}
export const ViewUserPostHeader = ({data, edit, setEdit, userId}: PropsType) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen} = useDeleteUserPost(data.id as number)

    const handleEditPost = () => {
        setEdit(true)
        setIsPopoverOpen(false)
    }

    return (
        <>
            <DeletePostModal
                handleDeletePost={handleDeletePost}
                handleModalClose={handleModalClose}
                isOpen={modalIsOpen}
            />
            <ViewUserPostHeaderWrapper>
                <div className={'avaLink'}>
                    <AvatarIcon img={'https://loremflickr.com/500/500'} userID={userId} />
                    <Link className={'link'} href={`${PATH.USER_PROFILE}/${userId}`}>
                        URLProfile
                    </Link>
                </div>
                {!edit && (
                    <Popover icon={<DotsHorizontal />} isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                        <PopoverItem icon={<EditPostIcon />} name={'Edit Post'} onClick={handleEditPost} />
                        <PopoverItem icon={<DeletePostIcon />} name={'Delete Post'} onClick={handleModalOpen} />
                    </Popover>
                )}
            </ViewUserPostHeaderWrapper>
        </>
    )
}
