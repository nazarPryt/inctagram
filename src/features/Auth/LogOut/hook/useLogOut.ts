import { useState } from 'react'

import { signOut } from 'next-auth/react'
import cookie from 'react-cookies'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useLogOutMutation } from 'features/Auth/LogOut/api/logOut.api'
import { accessToken } from 'shared/constants/constants'
import { PATH } from 'shared/constants/PATH'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const useLogOut = () => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [logOut] = useLogOutMutation()
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL

  const handleLogOut = async (): Promise<void> => {
    await logOut()
      .unwrap()
      .then(async () => {
        cookie.remove(accessToken)
        setIsOpen(false)
        await signOut({ callbackUrl: `${DOMAIN}/${PATH.LOGIN}` })
      })
      // TODO any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error)
        dispatch(
          SetAppNotificationAC({
            notifications: { type: 'error', message: 'Something went wrong, Try again please!!' },
          })
        )
      })
  }

  const handleCloseModal = (): void => {
    setIsOpen(false)
  }
  const handleModalOpen = (): void => {
    setIsOpen(true)
  }

  return { handleCloseModal, handleModalOpen, isOpen, handleLogOut }
}
