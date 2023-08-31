import { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useRegistrationMutation } from 'features/Auth/Registration/api/registration.api'
import { RegistrationFormData, RegistrationFormSchema } from 'features/Auth/Registration/api/registration.types'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const useRegistrationForm = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    ...rest
  } = useForm({
    resolver: yupResolver(RegistrationFormSchema),
    defaultValues: { checkbox: false },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  const [addNewUser, { isLoading }] = useRegistrationMutation()

  const onSubmit = async (data: RegistrationFormData): Promise<void> => {
    await addNewUser({ email: data.email, userName: data.userName, password: data.password })
      .unwrap()
      .then(() => setIsModalOpen(true))
      .catch(error =>
        dispatch(SetAppNotificationAC({ notifications: { type: 'error', message: error.data.messages[0].message } }))
      )
  }
  const handleModalClose = (): void => {
    setIsModalOpen(false)
    reset()
  }

  return {
    handleModalClose,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    control,
    isValid,
    errors,
    isModalOpen,
    ...rest,
  }
}
