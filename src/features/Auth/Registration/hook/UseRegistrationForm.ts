import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {zodResolver} from '@hookform/resolvers/zod'

import {useRegistrationMutation} from '../api/registration.api'
import {RegistrationFormData, createRegistrationFormSchema} from '../api/registration.schema'

export const useRegistrationForm = () => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {
        control,
        formState: {errors, isValid},
        handleSubmit,
        reset,
        setError,
        ...rest
    } = useForm<RegistrationFormData>({
        defaultValues: {checkbox: false},
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(createRegistrationFormSchema(t)),
    })

    const [addNewUser, {isLoading}] = useRegistrationMutation()

    const onSubmit = async (data: RegistrationFormData) => {
        await addNewUser({email: data.email, password: data.password, userName: data.userName})
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(
                error =>
                    error.data?.messages.map(() => {
                        if (error.data.messages[0].field === 'userName') {
                            setError(`${error.data.messages[0].field}` as 'root', {
                                message: t.errors.usernameExists,
                                type: 'manual',
                            })
                        }
                        if (error.data.messages[0].field === 'email') {
                            setError(`${error.data.messages[0].field}` as 'root', {
                                message: t.errors.emailExists,
                                type: 'manual',
                            })
                        }
                    })
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
