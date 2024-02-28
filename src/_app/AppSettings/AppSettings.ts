class AppSettings {
    //api
    public readonly BASE_URL: string
    public readonly COUNTRIES_URL: string
    public readonly DOMAIN_URL: string

    //keys
    public readonly RECAPTCHA_KEY: string

    //constants
    public readonly accessToken: string
    public readonly refreshToken: string

    constructor() {
        //api
        this.BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
        this.DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
        this.COUNTRIES_URL = process.env.NEXT_PUBLIC_COUNTRIES_URL

        //keys
        this.RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

        //constants
        this.accessToken = 'accessToken'
        this.refreshToken = 'refreshToken'
    }
}
export const appSettings = new AppSettings()
