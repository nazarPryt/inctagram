import {ViewUserPostHeaderWrapper} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader.styled'
import {DeletePostIcon} from 'features/Post/DeletePost/ui/icon/DeletePostIcon'
import {EditPostIcon} from 'features/Post/EditPost/ui/icon/EditPostIcon'
import Link from 'next/link'
import {Dispatch, SetStateAction, useState} from 'react'
import {PATH} from 'shared/constants/PATH'
import {AvatarIcon} from 'shared/ui/AvatarIcon/AvatarIcon'
import {Popover} from 'shared/ui/Popover/Popover'
import {PopoverItem} from 'shared/ui/Popover/PopoverItem/PopoverItem'
import {DeletePostModal} from 'features/Post/DeletePost/ui/DeletePostModal/DeletePostModal'
import {useDeleteUserPost} from 'features/Post/DeletePost/hook/useDeleteUserPost'
import {PopOverIcon} from '../../../Post/ui/PostHeader/popOverIcon'
import {PostByIdType} from '../../api/type'

type PropsType = {
    data: PostByIdType
    userId: number | null
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({userId, setEdit, edit, data}: PropsType) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen} = useDeleteUserPost(data.id as number)

    const handleEditPost = () => {
        setEdit(true)
        setIsPopoverOpen(false)
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
                    <Popover icon={<PopOverIcon />} setIsPopoverOpen={setIsPopoverOpen} isPopoverOpen={isPopoverOpen}>
                        <PopoverItem onClick={handleEditPost} name={'Edit Post'} icon={<EditPostIcon />} />
                        <PopoverItem onClick={handleModalOpen} name={'Delete Post'} icon={<DeletePostIcon />} />
                    </Popover>
                )}
            </ViewUserPostHeaderWrapper>
        </>
    )
}
