import {appSettings} from '@/_app/AppSettings/AppSettings'
import {z} from 'zod'

//https://it-incubator.io/dev/blog/env-variables-in-app-settings-with-zod-validation
//https://catalins.tech/validate-environment-variables-with-zod/

const EnvSchema = z
    .object({
        BASE_URL: z.string().trim().min(1).url(),
        COUNTRIES_URL: z.string().trim().min(1).url(),
        DOMAIN_URL: z.string().trim().min(1).url(),
        OG_IMAGE_URL: z.string().trim().min(1).url(),
        RECAPTCHA_KEY: z.string().trim().min(1),
        WS_URL: z.string().trim().min(1).url(),
    })
    .strict()

const ConstantsSchema = z
    .object({
        accessToken: z.literal('accessToken'),
        refreshToken: z.literal('refreshToken'),
        testEmail: z.literal('nexari5063@sentrau.com'),
        testPassword: z.literal('11223344qwerTY!'),
    })
    .strict()

export const AppSettingsSchema = z
    .object({
        constants: ConstantsSchema,
        env: EnvSchema,
    })
    .strict()

//declaring global process env types according to our EnvSchema
type EnvSchemaType = z.infer<typeof EnvSchema>

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvSchemaType {}
    }
}
