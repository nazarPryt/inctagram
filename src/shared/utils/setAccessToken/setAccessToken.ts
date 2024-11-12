import {appSettings} from '@/_app/AppSettings'
import {deleteCookie, setCookie} from 'cookies-next'

export const setAccessToken = async (accessToken: string) => {
    return new Promise<void>(resolve => {
        deleteCookie(appSettings.constants.accessToken)
        setCookie(appSettings.constants.accessToken, accessToken, {
            httpOnly: false,
            path: '/',
            sameSite: false,
        })
        resolve()
    })
}
//used on Login and RefreshTokens
