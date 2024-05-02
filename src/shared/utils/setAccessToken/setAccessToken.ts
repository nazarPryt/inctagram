import cookie from 'react-cookies'

import {appSettings} from '@/_app/AppSettings'

export const setAccessToken = async (accessToken: string) => {
    return new Promise<void>(resolve => {
        console.log('setAccessToken')
        console.log('accessToken', accessToken)
        cookie.remove(appSettings.constants.accessToken)
        cookie.save(appSettings.constants.accessToken, accessToken, {
            httpOnly: false,
            path: '/',
            sameSite: false,
        })
        resolve()
    })
}
//used on Login and RefreshTokens
