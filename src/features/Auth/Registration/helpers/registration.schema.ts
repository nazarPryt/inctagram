import {LocaleType} from '@/locales/en'
import {emailRFCRegex, passwordRegex, userNameRegex} from '@/shared/regex/regex'
import {z} from 'zod'

export const createRegistrationFormSchema = (t: LocaleType) => {
    return z
        .object({
            checkbox: z.boolean().default(false),
            email: z
                .string()
                .trim()
                .min(1, t.errors.nonemptyEmail)
                .email(t.errors.regexEmail)
                .regex(emailRFCRegex, t.errors.emailRFCRegex),
            password: z
                .string()
                .trim()
                .min(1, t.errors.nonemptyPassword)
                .regex(passwordRegex, t.errors.regexPasswordMustContain)
                .min(6, t.errors.minPassword(6))
                .max(20, t.errors.maxPassword(20)),
            passwordConfirmation: z.string().trim(),
            userName: z
                .string()
                .trim()
                .min(6, t.errors.minUsername(6))
                .max(30, t.errors.maxUsername(30))
                .regex(userNameRegex, t.errors.regexUsername),
        })
        .refine(data => data.password === data.passwordConfirmation, {
            message: t.errors.passwordsMustMatch,
            path: ['passwordConfirmation'],
        })
        .superRefine((data, ctx) => {
            if (!data.checkbox) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: t.errors.requiredTerms,
                    path: ['checkbox'],
                })
            }
        })
}

export type RegistrationFormData = z.infer<ReturnType<typeof createRegistrationFormSchema>>
export type RegistrationRequestType = Pick<RegistrationFormData, 'email' | 'password' | 'userName'>
