import {useState} from 'react'

import {useDeletePostMutation} from '../api/DeletePost.api'

export const useDeleteUserPost = (postId: number) => {
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
        setModalIsOpen(false)
    }

    return {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen}
}
