declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_BASE_URL: string
        NEXT_PUBLIC_DOMAIN_URL: string
        NEXT_PUBLIC_RECAPTCHA_KEY: string
        NEXT_PUBLIC_GOOGLE_CLIENT_IDD: string
    }
}
//https://github.com/nextauthjs/next-auth-example/blob/main/process.d.ts
