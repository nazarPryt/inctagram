import { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useCreateNewPasswordMutation } from 'features/Auth/CreateNewPassword/api/createNewPassword.api'
import { PATH } from 'shared/constants/PATH'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

type NewPassType = {
  newPassword: string
  recoveryCode: string
}
const schema = yup.object({
  password: yup
    .string()
    .trim()
    .min(6, 'Your password is too short, min 6 characters')
    .max(20, 'Your password is too long, max 20 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .trim()
    .required('You have to confirm your Password')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

type FormData = yup.InferType<typeof schema>

export const useCreateNewPassword = (recoveryCode: string) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [askNewPassword, { isLoading }] = useCreateNewPasswordMutation()
  const {
    handleSubmit,
    reset,
    formState: { errors, isValid },
    ...rest
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })
  const onSubmit = async (data: FormData) => {
    const toSend: NewPassType = {
      newPassword: data.password,
      recoveryCode,
    }

    askNewPassword({ ...toSend })
      .unwrap()
      .then(() => {
        setIsOpen(true)
      })
      .catch(() => {
        dispatch(
          SetAppNotificationAC({
            notifications: { type: 'error', message: 'Something went wrong, Try again please!!' },
          })
        )
      })
  }

  const handleModalClose = () => {
    setIsOpen(false)
    reset()
    router.replace(PATH.LOGIN)
  }

  return {
    isLoading,
    isOpen,
    handleModalClose,
    isValid,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    ...rest,
  }
}
