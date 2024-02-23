import * as yup from 'yup'

export const GeneralInformationSchema = yup.object().shape({
    aboutMe: yup
        .string()
        .required('About me information field is required')
        .max(200, 'About me field must be not more than 200 characters long'),
    city: yup.string().required('City is required'),
    dateOfBirth: yup.date().required(),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    userName: yup
        .string()
        .required('Username is required')
        .min(6, 'Username must contain at least 6 characters')
        .max(30, 'Username must be at least 30 characters long'),
})

export type GeneralInformationFormData = yup.InferType<typeof GeneralInformationSchema>
