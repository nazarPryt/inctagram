import {useResendConfirmationLinkMutation} from 'features/Auth/ResendVerificationLink/api/ResendVerificationLink.api'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {PATH} from 'shared/constants/PATH'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

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
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
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
