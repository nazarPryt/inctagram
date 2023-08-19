import * as yup from 'yup'

export type RegistrationRequestType = {
    userName: string
    email: string
    password: string
}

export const RegistrationFormSchema = yup
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
        checkbox: yup.boolean().oneOf([true], 'checkbox').required(),
    })
    .required('You have to confirm password.')

export type RegistrationFormData = yup.InferType<typeof RegistrationFormSchema>
