import {useState} from 'react'

import {SetAppNotificationAC} from '@/_app/store/appSlice'
import {useLogOutMutation} from '@/features/Auth/LogOut/api/logOut.api'
import {PATH} from '@/shared/constants/PATH'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useRouter} from 'next/router'

export const useLogOut = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [logOut] = useLogOutMutation()

    const handleLogOut = async () => {
        await logOut()
            .unwrap()
            .then(async () => {
                setIsOpen(false)
                router.push(PATH.LOGIN)
            })
            .catch((error: any) => {
                console.log(error)
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Something went wrong, Try again please!!', type: 'error'},
                    })
                )
            })
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }
    const handleModalOpen = () => {
        setIsOpen(true)
    }

    return {handleCloseModal, handleLogOut, handleModalOpen, isOpen}
}
