import {useRef} from 'react'
import {useForm} from 'react-hook-form'
import {useAppDispatch} from '../../../shared/hooks/reduxHooks'
import {toDate} from 'date-fns'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import {useUpdateUserMutation} from '../../../redux/api/profileAPI'
import {SetAppNotificationAC} from '../../../_app/store/appSlice'
import {UserProfile} from '../../../redux/types/authTypes'

export interface IFormInput {
    userName: string
    firstName: string
    lastName: string
    dateOfBirth: Date
    city: string
    aboutMe: string
}

const schema = yup.object().shape({
    userName: yup
        .string()
        .required('Username is required')
        .min(6, 'Username must contain at least 6 characters')
        .max(30, 'Username must be at least 30 characters long'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    dateOfBirth: yup.date().required(),
    city: yup.string().required('City is required'),
    aboutMe: yup
        .string()
        .required('About me information field is required')
        .max(200, 'About me field must be at least 200 characters long'),
})

export const useGeneralInformationForm = ({data}: {data: UserProfile}) => {
    const dispatch = useAppDispatch()
    const datePickerRef = useRef<DatePicker>(null)
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
        ...rest
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {...data, dateOfBirth: new Date(data.dateOfBirth)},
    })
    const [updateProfile] = useUpdateUserMutation()

    const onSubmit = async (data: IFormInput) => {
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
            .then()
            .catch(error => dispatch(SetAppNotificationAC({notifications: {type: 'error', message: error.message}})))
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
