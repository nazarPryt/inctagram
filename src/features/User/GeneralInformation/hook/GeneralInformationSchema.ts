//https://stackoverflow.com/questions/64426021/formik-yup-how-to-validate-if-the-provided-date-is-eighteen-years-old

import {z} from 'zod'

export const GeneralInformationSchema = z.object({
    aboutMe: z
        .string()
        .min(1, 'About me information field is required')
        .max(200, 'About me field must be not more than 200 characters long'),
    city: z.string().min(1, 'City is required'),
    country: z.string().min(1, 'Country is required'),
    dateOfBirth: z
        .date()
        .refine(
            dob => {
                if (!dob) {
                    return true
                } // Allow null values if nullable is intended.

                const currentDate = new Date()
                const age = currentDate.getFullYear() - dob.getFullYear()
                const isOldEnough =
                    age > 13 || (age === 13 && currentDate >= new Date(dob.setFullYear(dob.getFullYear() + 13)))

                return isOldEnough
            },
            {
                message: 'A user under 13 cannot create a profile',
            }
        )
        .or(z.string().refine(value => value === null, {message: 'Required'})),
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    userName: z
        .string()
        .min(6, 'Username must contain at least 6 characters')
        .max(30, 'Username must be at least 30 characters long'),
})

export type GeneralInformationFormData = z.infer<typeof GeneralInformationSchema>
