//https://gist.github.com/xstevenyung/560c880992b3ad6892923cbad582bd81  <-- Axios Instance Example

import {appSettings} from '@/_app/AppSettings'
import {MeDataType} from '@/features/Auth/Me/api/me.types'
import axios from 'axios'
import {GetServerSidePropsContext} from 'next'
import nookies from 'nookies'

const baseURL = appSettings.BASE_URL

export const axiosAuth = (ctx: GetServerSidePropsContext) => {
    const instance = axios.create({
        baseURL,
        withCredentials: true,
    })

    instance.interceptors.request.use(
        config => {
            const cookies = nookies.get(ctx)
            const accessToken = cookies.accessToken

            if (accessToken) {
                config.headers.Authorization = 'Bearer ' + accessToken
            }

            return config
        },
        error => Promise.reject(error)
    )

    instance.interceptors.response.use(
        config => {
            return config
        },
        async error => {
            const originalRequest = error.config

            if (error.response.status == 401 && error.config && !error.config._isRetry) {
                originalRequest._isRetry = true
                try {
                    const refreshTokenValue = ctx.req.cookies.refreshToken

                    if (refreshTokenValue) {
                        const resRefresh = await axios.post<{accessToken: string}>(
                            `auth/update-tokens`,
                            {},
                            {baseURL, headers: ctx.req.headers, withCredentials: true}
                        )

                        console.log('resRefresh.status: ', resRefresh.status)

                        const newRefreshToken = resRefresh.headers['set-cookie']![0]

                        const resMe = await axios.get(`auth/me`, {
                            baseURL,
                            headers: {
                                Authorization: 'Bearer ' + resRefresh.data.accessToken,
                            },
                            withCredentials: true,
                        })

                        ctx.res.setHeader('Set-Cookie', [
                            `${newRefreshToken}`,
                            `${appSettings.accessToken}=${resRefresh.data.accessToken}; Path=/`,
                        ])
                        console.log('resMe.data: ', resMe.data)

                        return (originalRequest.data = resMe.data)
                    } else {
                        console.log('refreshToken is undefined')

                        return
                    }
                } catch (e) {
                    originalRequest._isRetry = false
                    console.log('User is not authorized (in interceptors.response)')
                    // await serverAuthAPI.logOut(ctx)

                    return
                }
            }

            return
        }
    )

    return instance
}

export const serverAuthAPI = {
    async authMe(ctx: GetServerSidePropsContext) {
        console.log('authMe serverside start')
        try {
            const res = await axiosAuth(ctx).get<MeDataType>(`auth/me`)

            console.log('authMe serverside success')

            return res
        } catch (e) {
            console.log('Cant make authMe request')
        }
    },
    async logOut(ctx: GetServerSidePropsContext) {
        console.log('logOut serverside')
        nookies.destroy(ctx, appSettings.accessToken)
        nookies.destroy(ctx, appSettings.refreshToken)
        console.log('logOut serverside is success')
    },
}
