import {useState} from 'react'

import {SetAppNotificationAC} from '_app/store/appSlice'
import {useResendConfirmationLinkMutation} from 'features/Auth/ResendVerificationLink/api/ResendVerificationLink.api'
import {useRouter} from 'next/navigation'
import {PATH} from 'shared/constants/PATH'
import {useAppDispatch} from 'shared/hooks/reduxHooks'

export const useResendConfirmationLink = ({email}: {email: string}) => {
    const dispatch = useAppDispatch()
    const [resend, {isLoading}] = useResendConfirmationLinkMutation()
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleResend = () => {
        resend({email})
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {message: error.data.messages[0].message, type: 'error'}})
                )
            )
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
        router.replace(PATH.LOGIN)
    }

    return {
        handleModalClose,
        handleResend,
        isLoading,
        isModalOpen,
    }
}
