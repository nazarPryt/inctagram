import {useState} from 'react'
import {PATH} from 'shared/constants/PATH'
import {useRouter} from 'next/router'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useDeletePostMutation} from 'features/Post/DeletePost/api/DeletePost.api'

export const useDeleteUserPost = ({postId}: {postId: number}) => {
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
                router.push(PATH.MY_PROFILE)
            })
            .catch(err =>
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: err},
                    })
                )
            )
    }

    return {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen}
}
