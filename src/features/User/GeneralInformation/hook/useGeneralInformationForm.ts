import {useRef} from 'react'
import DatePicker from 'react-datepicker'
import {useForm} from 'react-hook-form'

import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {yupResolver} from '@hookform/resolvers/yup'
import {toDate} from 'date-fns'

import {useUpdateUserMutation} from '../api/updateUser/updateUser.api'
import {UserProfileType} from '../api/userProfile/userProfile.types'
import {GeneralInformationFormData, GeneralInformationSchema} from './GeneralInformationSchema'

export const useGeneralInformationForm = ({data}: {data: UserProfileType}) => {
    const dispatch = useAppDispatch()
    const [updateProfile] = useUpdateUserMutation()

    const {
        control,
        formState: {errors},
        handleSubmit,
        register,
        ...rest
    } = useForm<GeneralInformationFormData>({
        defaultValues: {...data, dateOfBirth: new Date(data.dateOfBirth)},
        mode: 'all',
        resolver: yupResolver(GeneralInformationSchema),
    })

    const onSubmit = async (data: GeneralInformationFormData) => {
        const result = data.dateOfBirth.toLocaleDateString('ru-RU')

        console.log('result', result)
        // await updateProfile({
        //     aboutMe: data.aboutMe,
        //     city: data.city,
        //     dateOfBirth: result,
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     userName: data.userName,
        // })
        //     .unwrap()
        //     .then(() =>
        //         dispatch(
        //             SetAppNotificationAC({
        //                 notifications: {message: 'Yous Profile was successfully updated', type: 'success'},
        //             })
        //         )
        //     )
        //     .catch(error => dispatch(SetAppNotificationAC({notifications: {message: error.message, type: 'error'}})))
    }

    return {
        control,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        register,
        ...rest,
    }
}
