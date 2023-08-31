import { Dispatch, SetStateAction, useState } from 'react'

import Link from 'next/link'

import { PopOverIcon } from '../../../Post/ui/PostHeader/popOverIcon'

import { ViewUserPostHeaderWrapper } from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader.styled'
import { useDeleteUserPost } from 'features/Post/DeletePost/hook/useDeleteUserPost'
import { DeletePostModal } from 'features/Post/DeletePost/ui/DeletePostModal/DeletePostModal'
import { DeletePostIcon } from 'features/Post/DeletePost/ui/icon/DeletePostIcon'
import { EditPostIcon } from 'features/Post/EditPost/ui/icon/EditPostIcon'
import { PATH } from 'shared/constants/PATH'
import { AvatarIcon } from 'shared/ui/AvatarIcon/AvatarIcon'
import { Popover } from 'shared/ui/Popover/Popover'
import { PopoverItem } from 'shared/ui/Popover/PopoverItem/PopoverItem'

type PropsType = {
  userId: number
  postId: number
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({ userId, postId, setEdit, edit }: PropsType): JSX.Element => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const { handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen } = useDeleteUserPost({ postId })

  const handleEditPost = (): void => {
    setEdit(true)
    setIsPopoverOpen(false)
  }

  return (
    <>
      <DeletePostModal handleDeletePost={handleDeletePost} handleModalClose={handleModalClose} isOpen={modalIsOpen} />
      <ViewUserPostHeaderWrapper>
        <div className="avaLink">
          <AvatarIcon img="https://loremflickr.com/500/500" userID={userId} />
          <Link className="link" href={`${PATH.USER_PROFILE}/${userId}`}>
            URLProfile
          </Link>
        </div>
        {!edit && (
          <Popover icon={<PopOverIcon />} isPopoverOpen={isPopoverOpen} setIsPopoverOpen={setIsPopoverOpen}>
            <PopoverItem icon={<EditPostIcon />} name="Edit Post" onClick={handleEditPost} />
            <PopoverItem icon={<DeletePostIcon />} name="Delete Post" onClick={handleModalOpen} />
          </Popover>
        )}
      </ViewUserPostHeaderWrapper>
    </>
  )
}
