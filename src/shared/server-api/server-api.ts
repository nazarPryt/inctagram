import axios from 'axios'
import cookie from 'react-cookies'
import {accessToken} from 'shared/constants/constants'
import nookies from 'nookies'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string
// const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL as string

export const instance = axios.create({
    withCredentials: true,
    baseURL,
})

// instance.interceptors.request.use(
//     config => {
//         const token = cookie.loadAll()
//         console.log(`interceptors.request accessToken: ${token.accessToken}`)
//
//         if (token.accessToken) {
//             config.headers.Authorization = 'Bearer ' + token
//         }
//
//         return config
//     },
//     error => Promise.reject(error)
// )

instance.interceptors.response.use(
    config => {
        return config
    },
    async error => {
        const originalRequest = error.config

        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                await serverAuthAPI.refreshTokens()

                return instance.request(originalRequest)
            } catch (e) {
                console.log('User is not authorized (in interceptors.response)')
            }
        }
        throw error
    }
)

export const serverAuthAPI = {
    async authMe(token: string) {
        try {
            console.log('authMe start')
            const res = await instance.get<authMeDataType>(`auth/me`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log('authMe response: ', res.data)

            return res.data
        } catch (e) {
            console.log('authMe error', e)
            throw new Error(`Cant make authMe request`)
        }
    },
    async refreshTokens() {
        try {
            console.log('start refreshTokens')

            const res = await axios.post<{accessToken: string}>(`${baseURL}auth/update-tokens`)

            console.log('success refreshTokens')

            cookie.save(accessToken, res.data.accessToken, {})

            return res.data.accessToken
        } catch (e) {
            console.log('refreshTokens error: ', e)
            throw new Error('Cant make request for refresh tokens')
        }
    },
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
