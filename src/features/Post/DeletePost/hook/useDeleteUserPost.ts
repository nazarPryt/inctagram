import { useState } from 'react'

import { useRouter } from 'next/router'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useDeletePostMutation } from 'features/Post/DeletePost/api/DeletePost.api'
import { PATH } from 'shared/constants/PATH'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const useDeleteUserPost = ({ postId }: { postId: number }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [deletePost] = useDeletePostMutation()

  const handleModalClose = (): void => {
    setModalIsOpen(false)
  }
  const handleModalOpen = (): void => {
    setModalIsOpen(true)
  }
  const handleDeletePost = (): void => {
    deletePost(postId)
      .then(() => {
        setModalIsOpen(false)
        router.push(PATH.MY_PROFILE)
      })
      .catch(err =>
        dispatch(
          SetAppNotificationAC({
            notifications: { type: 'error', message: err },
          })
        )
      )
  }

  return { handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen }
}
