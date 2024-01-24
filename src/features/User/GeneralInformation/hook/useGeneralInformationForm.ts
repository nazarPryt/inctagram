import {useRef} from 'react'
import DatePicker from 'react-datepicker'
import {useForm} from 'react-hook-form'

import {yupResolver} from '@hookform/resolvers/yup'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {toDate} from 'date-fns'
import {useUpdateUserMutation} from 'features/User/GeneralInformation/api/updateUser.api'
import {UserProfile} from 'redux/types/authTypes'
import {useAppDispatch} from 'shared/hooks/reduxHooks'

import {GeneralInformationFormData, GeneralInformationSchema} from './GeneralInformationSchema'

export const useGeneralInformationForm = ({data}: {data: UserProfile}) => {
    const dispatch = useAppDispatch()
    const [updateProfile] = useUpdateUserMutation()

    const datePickerRef = useRef<DatePicker>(null)

    const {
        control,
        formState: {errors},
        handleSubmit,
        register,
        ...rest
    } = useForm<GeneralInformationFormData>({
        defaultValues: {...data, dateOfBirth: new Date(data.dateOfBirth)},
        resolver: yupResolver(GeneralInformationSchema),
    })

    const onSubmit = async (data: GeneralInformationFormData) => {
        const result = String(toDate(data.dateOfBirth).toISOString())

        await updateProfile({
            aboutMe: data.aboutMe,
            city: data.city,
            dateOfBirth: result,
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
        })
            .unwrap()
            .then(() =>
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Yous Profile was successfully updated', type: 'success'},
                    })
                )
            )
            .catch(error => dispatch(SetAppNotificationAC({notifications: {message: error.message, type: 'error'}})))
    }

    return {
        control,
        datePickerRef,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        register,
        ...rest,
    }
}
