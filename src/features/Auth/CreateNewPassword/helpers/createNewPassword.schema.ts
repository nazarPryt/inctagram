import {LocaleType} from '@/locales/en'
import {passwordRegex} from '@/shared/regex/regex'
import {z} from 'zod'

export const createNewPasswordSchema = (t: LocaleType) => {
    return z
        .object({
            password: z
                .string()
                .trim()
                .min(1, t.errors.nonemptyPassword)
                .regex(passwordRegex, t.errors.regexPasswordMustContain)
                .min(6, t.errors.minPassword(6))
                .max(20, t.errors.maxPassword(20)),
            passwordConfirmation: z.string().trim(),
        })
        .refine(data => data.password === data.passwordConfirmation, {
            message: t.errors.passwordsMustMatch,
            path: ['passwordConfirmation'],
        })
}

export type createNewPasswordFormData = z.infer<ReturnType<typeof createNewPasswordSchema>>
