import axios from 'axios'
import {accessToken, refreshToken} from 'shared/constants/constants'
import {GetServerSidePropsContext} from 'next'
import nookies from 'nookies'

//https://gist.github.com/xstevenyung/560c880992b3ad6892923cbad582bd81  <-- Axios Instance Example
// const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL as string

export const customAxios = (ctx: GetServerSidePropsContext) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

    const instance = axios.create({
        withCredentials: true,
        baseURL,
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
                            {withCredentials: true, headers: ctx.req.headers, baseURL}
                        )
                        console.log('resRefresh.status: ', resRefresh.status)

                        const newRefreshToken = resRefresh.headers['set-cookie']![0]

                        const resMe = await axios.get(`auth/me`, {
                            withCredentials: true,
                            headers: {
                                Authorization: 'Bearer ' + resRefresh.data.accessToken,
                            },
                            baseURL,
                        })
                        ctx.res.setHeader('Set-Cookie', [
                            `${newRefreshToken}`,
                            `${accessToken}=${resRefresh.data.accessToken}; Path=/`,
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
                    await serverAuthAPI.logOut(ctx)
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
            const res = await customAxios(ctx).get<authMeDataType>(`auth/me`)
            console.log('authMe serverside success')
            return res
        } catch (e) {
            console.log('Cant make authMe request')
        }
    },
    async logOut(ctx: GetServerSidePropsContext) {
        console.log('logOut serverside')
        nookies.destroy(ctx, accessToken)
        nookies.destroy(ctx, refreshToken)
        console.log('logOut serverside is success')
    },
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
