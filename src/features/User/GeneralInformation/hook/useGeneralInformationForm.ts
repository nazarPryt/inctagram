import {useForm} from 'react-hook-form'

import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {zodResolver} from '@hookform/resolvers/zod'
import {toDate} from 'date-fns'

import {useUpdateUserMutation} from '../api/updateUser/updateUser.api'
import {UserProfileType} from '../api/userProfile/userProfile.types'
import {GeneralInformationFormData, GeneralInformationSchema} from './GeneralInformationSchema'

export const useGeneralInformationForm = ({data}: {data: UserProfileType}) => {
    const dispatch = useAppDispatch()
    const [updateProfile, {isLoading}] = useUpdateUserMutation()

    const cityArr = data.city ? data.city.split(',') : []
    const country = cityArr[0] ? cityArr[0] : ''
    const city = cityArr[1] ? cityArr[1] : ''

    const {
        control,
        formState: {errors},
        handleSubmit,
        register,
        ...rest
    } = useForm<GeneralInformationFormData>({
        defaultValues: {...data, city, country, dateOfBirth: new Date(data.dateOfBirth)},
        mode: 'all',
        resolver: zodResolver(GeneralInformationSchema),
    })

    const onSubmit = async (data: GeneralInformationFormData) => {
        const dateOfBirth = String(toDate(data.dateOfBirth).toISOString())
        const city = `${data.country}, ${data.city}`

        await updateProfile({
            aboutMe: data.aboutMe,
            city,
            dateOfBirth,
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
        errors,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        register,
        ...rest,
    }
}
