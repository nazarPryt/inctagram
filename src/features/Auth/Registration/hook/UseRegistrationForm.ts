import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useRegistrationMutation} from 'features/Auth/Registration/api/registration.api'
import {RegistrationFormData, RegistrationFormSchema} from 'features/Auth/Registration/api/registration.types'

export const useRegistrationForm = (setIsModalOpen: (v: boolean) => void) => {
    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        formState: {errors, isValid},

        ...rest
    } = useForm({resolver: yupResolver(RegistrationFormSchema), mode: 'onTouched', reValidateMode: 'onChange'})

    const [addNewUser, {isLoading}] = useRegistrationMutation()

    const onSubmit = async (data: RegistrationFormData) => {
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
        isValid,
        errors,
        ...rest,
    }
}
