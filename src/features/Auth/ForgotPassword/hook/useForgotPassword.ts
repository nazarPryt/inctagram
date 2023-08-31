import { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useForgotPasswordMutation } from 'features/Auth/ForgotPassword/api/forgotPassword.api'
import { emailPattern } from 'features/Auth/Registration/helpers/emailPattern'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

const schema = yup.object({
  email: yup.string().trim().required('Email is required').matches(emailPattern, 'email is not valid'),
  recaptcha: yup.string().nonNullable().trim().required('Token is required'),
})

type FormData = yup.InferType<typeof schema>

export const useForgotPassword = () => {
  const dispatch = useAppDispatch()
  const [token, setToken] = useState<string | null>(null)
  const [isOpen, setIsModalOpen] = useState(false)
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  const {
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isValid },
    ...rest
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })
  const onSubmit = async (data: FormData) => {
    forgotPassword(data)
      .unwrap()
      .then(() => {
        setIsModalOpen(true)
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
    setIsModalOpen(false)
    reset()
  }
  const handleChangeCaptcha = (value: string | null) => {
    setToken(value)
    setValue('recaptcha', value!)
  }
  const email = getValues('email')

  return {
    isOpen,
    handleModalClose,
    email,
    handleChangeCaptcha,
    token,
    isLoading,
    isValid,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    ...rest,
  }
}
