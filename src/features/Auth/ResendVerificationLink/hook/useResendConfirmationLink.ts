import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useResendConfirmationLinkMutation } from 'features/Auth/ResendVerificationLink/api/ResendVerificationLink.api'
import { PATH } from 'shared/constants/PATH'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const useResendConfirmationLink = ({ email }: { email: string }) => {
  const dispatch = useAppDispatch()
  const [resend, { isLoading }] = useResendConfirmationLinkMutation()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleResend = (): void => {
    resend({ email })
      .unwrap()
      .then(() => setIsModalOpen(true))
      .catch(error =>
        dispatch(SetAppNotificationAC({ notifications: { type: 'error', message: error.data.messages[0].message } }))
      )
  }
  const handleModalClose = (): void => {
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
