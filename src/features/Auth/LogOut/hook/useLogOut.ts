import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useState} from 'react'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useLogOutMutation} from 'features/Auth/LogOut/api/logOut.api'
import {useRouter} from 'next/router'
import {PATH} from 'shared/constants/PATH'

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
                        notifications: {type: 'error', message: 'Something went wrong, Try again please!!'},
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
    return {handleCloseModal, handleModalOpen, isOpen, handleLogOut}
}
