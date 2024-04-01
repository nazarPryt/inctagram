class AppSettings {
    //constants
    public readonly constants = {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        testEmail: 'nexari5063@sentrau.com',
        testPassword: '11223344qwerTY!',
    }

    public readonly env = {
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL as string,
        COUNTRIES_URL: process.env.NEXT_PUBLIC_COUNTRIES_URL as string,
        DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL as string,
        OG_IMAGE_URL: process.env.NEXT_PUBLIC_OG_IMAGE_URL as string,
        RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string,
    }
}
export const appSettings = new AppSettings()
