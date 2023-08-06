import * as yup from 'yup'
import {useAddNewUserMutation} from 'redux/api/authAPI'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {SetAppNotificationAC} from '_app/store/appSlice'

const schema = yup
    .object({
        userName: yup
            .string()
            .trim()
            .min(6, 'Your userName is too short, min 6 characters')
            .max(30, 'Your userName is too long, max 30 characters')
            .required('User name is required'),
        email: yup.string().trim().email().required('Email is required'),
        password: yup
            .string()
            .trim()
            .min(6, 'Your password is too short, min 6 characters')
            .max(20, 'Your password is too long, max 20 characters')
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .trim()
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),
    })
    .required('You have to confirm password.')

type FormData = yup.InferType<typeof schema>

export const useRegistrationForm = (setIsModalOpen: (v: boolean) => void) => {
    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        formState: {errors},
        ...rest
    } = useForm({resolver: yupResolver(schema), mode: 'onTouched', reValidateMode: 'onChange'})

    const [addNewUser, {isLoading}] = useAddNewUserMutation()

    const onSubmit = async (data: FormData) => {
        await addNewUser({email: data.email, userName: data.userName, password: data.password})
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        errors,
        ...rest,
    }
}
