import * as yup from 'yup'
import {emailPattern} from 'shared/helpers/emailPattern'

export type RegistrationRequestType = {
    userName: string
    email: string
    password: string
}
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const passwordPatternError =
    'Password must contain 1-9;\n' +
    'A-Z;\n' +
    'a-z;\n' +
    '! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _`\n' +
    '{ | } ~'

export const RegistrationFormSchema = yup
    .object({
        userName: yup
            .string()
            .trim()
            .min(6, 'Your userName is too short, min 6 characters')
            .max(30, 'Your userName is too long, max 30 characters')
            .required('User name is required'),
        email: yup.string().trim().required('Email is required').matches(emailPattern, 'email is not valid'),
        password: yup
            .string()
            .trim()
            .required('Password is required')
            .min(6, 'Your password is too short, min 6 characters')
            .max(20, 'Your password is too long, max 20 characters')
            .matches(passwordPattern, passwordPatternError),
        passwordConfirmation: yup
            .string()
            .trim()
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),
        checkbox: yup.boolean().oneOf([true], 'checkbox').required(),
    })
    .required('You have to confirm password.')

export type RegistrationFormData = yup.InferType<typeof RegistrationFormSchema>
