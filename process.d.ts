declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_BASE_URL: string
        NEXT_PUBLIC_DOMAIN_URL: string

        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
        NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string

        NEXT_PUBLIC_GITHUB_CLIENT_ID: string
        NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string

        NEXT_PUBLIC_NEXTAUTH_SECRET: string
        NEXTAUTH_URL: string
    }
}
//https://github.com/nextauthjs/next-auth-example/blob/main/process.d.ts
