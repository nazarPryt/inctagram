import {useState} from 'react'

import {DeletePostModal} from '@/features/Post/DeletePost/ui/DeletePostModal'
import {useRouter} from 'next/router'

import {useDeletePostMutation} from '../api/DeletePost.api'

type PropsType = {
    isModal?: boolean
    postId: number
}
export const useDeleteUserPost = ({isModal, postId}: PropsType) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [deletePost] = useDeletePostMutation()
    const {back} = useRouter()

    const handleModalClose = () => {
        setModalIsOpen(false)
    }
    const handleModalOpen = () => {
        setModalIsOpen(true)
    }
    const handleDeletePost = () => {
        deletePost(postId)
        setModalIsOpen(false)
        if (isModal) {
            back()
        }
    }

    return {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen}
}
