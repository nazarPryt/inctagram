import {LocaleType} from '@/locales/en'
import {emailRFCRegex} from '@/shared/regex/regex'
import {z} from 'zod'

export const createForgotPasswordSchema = (t: LocaleType) => {
    return z.object({
        email: z
            .string()
            .trim()
            .min(1, t.errors.nonemptyEmail)
            .email(t.errors.regexEmail)
            .regex(emailRFCRegex, t.errors.emailRFCRegex),
        recaptcha: z.string().trim().min(1),
    })
}

export type ForgotPasswordFormData = z.infer<ReturnType<typeof createForgotPasswordSchema>>
