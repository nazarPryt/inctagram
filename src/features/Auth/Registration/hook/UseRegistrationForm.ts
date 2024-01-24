import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {yupResolver} from '@hookform/resolvers/yup'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useRegistrationMutation} from 'features/Auth/Registration/api/registration.api'
import {RegistrationFormData, RegistrationFormSchema} from 'features/Auth/Registration/api/registration.types'
import {useAppDispatch} from 'shared/hooks/reduxHooks'

export const useRegistrationForm = () => {
    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {
        control,
        formState: {errors, isValid},
        handleSubmit,
        reset,
        ...rest
    } = useForm({
        defaultValues: {checkbox: false},
        mode: 'onTouched',
        reValidateMode: 'onChange',
        resolver: yupResolver(RegistrationFormSchema),
    })

    const [addNewUser, {isLoading}] = useRegistrationMutation()

    const onSubmit = async (data: RegistrationFormData) => {
        await addNewUser({email: data.email, password: data.password, userName: data.userName})
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {message: error.data.messages[0].message, type: 'error'}})
                )
            )
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
        reset()
    }

    return {
        control,
        errors,
        handleModalClose,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        isModalOpen,
        isValid,
        ...rest,
    }
}
