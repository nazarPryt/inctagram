import { useRef } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { toDate } from 'date-fns'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'

import { GeneralInformationFormData, GeneralInformationSchema } from './GeneralInformationSchema'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useUpdateUserMutation } from 'features/User/GeneralInformation/api/updateUser.api'
import { UserProfile } from 'redux/types/authTypes'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const useGeneralInformationForm = ({ data }: { data: UserProfile }) => {
  const dispatch = useAppDispatch()
  const [updateProfile] = useUpdateUserMutation()

  const datePickerRef = useRef<DatePicker>(null)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    ...rest
  } = useForm<GeneralInformationFormData>({
    resolver: yupResolver(GeneralInformationSchema),
    defaultValues: { ...data, dateOfBirth: new Date(data.dateOfBirth) },
  })

  const onSubmit = async (data: GeneralInformationFormData): Promise<void> => {
    const result = String(toDate(data.dateOfBirth).toISOString())

    await updateProfile({
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      dateOfBirth: result,
      aboutMe: data.aboutMe,
    })
      .unwrap()
      .then(() =>
        dispatch(
          SetAppNotificationAC({
            notifications: { type: 'success', message: 'Yous Profile was successfully updated' },
          })
        )
      )
      .catch(error => dispatch(SetAppNotificationAC({ notifications: { type: 'error', message: error.message } })))
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    datePickerRef,
    ...rest,
  }
}
