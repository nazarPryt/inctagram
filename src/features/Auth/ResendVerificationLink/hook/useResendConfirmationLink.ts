import {useState} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {useRouter} from 'next/navigation'

import {useResendConfirmationLinkMutation} from '../api/ResendVerificationLink.api'

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
