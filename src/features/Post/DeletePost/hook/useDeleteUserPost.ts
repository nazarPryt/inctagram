import {useState} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useRouter} from 'next/router'

import {useDeletePostMutation} from '../api/DeletePost.api'

export const useDeleteUserPost = (postId: number) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [deletePost] = useDeletePostMutation()

    const handleModalClose = () => {
        setModalIsOpen(false)
    }
    const handleModalOpen = () => {
        setModalIsOpen(true)
    }
    const handleDeletePost = () => {
        deletePost(postId)
            .then(() => {
                setModalIsOpen(false)
                router.reload() //todo fix reload need to close ViewUserPost modal if it opened
            })
            .catch(err =>
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: err, type: 'error'},
                    })
                )
            )
    }

    return {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen}
}
