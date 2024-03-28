import {LocaleType} from '@/locales/en'
import {emailRFCRegex} from '@/shared/regex/regex'
import {z} from 'zod'

export const createLoginSchema = (t: LocaleType) => {
    return z.object({
        email: z
            .string()
            .trim()
            .min(1, t.errors.nonemptyEmail)
            .email(t.errors.regexEmail)
            .regex(emailRFCRegex, t.errors.emailRFCRegex),
        password: z.string().trim().min(1, t.errors.nonemptyPassword),
    })
}

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>
