import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useState} from 'react'
import cookie from 'react-cookies'
import {accessToken} from 'shared/constants/constants'
import {signOut} from 'next-auth/react'
import {PATH} from 'shared/constants/PATH'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useLogOutMutation} from 'features/Auth/LogOut/api/logOut.api'

export const useLogOut = () => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [logOut] = useLogOutMutation()
    const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL

    const handleLogOut = async () => {
        await logOut()
            .unwrap()
            .then(async () => {
                cookie.remove(accessToken)
                setIsOpen(false)
                await signOut({callbackUrl: `${DOMAIN}/${PATH.LOGIN}`})
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
