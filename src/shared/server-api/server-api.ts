import axios from 'axios'
import {accessToken, refreshToken} from 'shared/constants/constants'
import {GetServerSidePropsContext} from 'next'
import nookies from 'nookies'
import {cookies} from 'next/headers'
import {NextRequest, NextResponse} from 'next/server'

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
                    console.log(' 401 interceptors.response start!!!!!!!!!!')
                    console.log('ctx.req.cookies (BEFORE update-tokens)', ctx.req.cookies)
                    const refreshTokenValue = ctx.req.cookies.refreshToken

                    if (refreshTokenValue) {
                        const resRefresh = await axios.post<{accessToken: string}>(
                            `auth/update-tokens`,
                            {},
                            {withCredentials: true, headers: ctx.req.headers, baseURL}
                        )
                        console.log('resRefresh.status: ', resRefresh.status)

                        nookies.destroy(ctx, 'accessToken')
                        nookies.destroy(ctx, 'refreshToken')

                        const newRefreshCookies = resRefresh.headers['set-cookie']?.length
                            ? resRefresh.headers['set-cookie'][0]
                            : ''
                        const arr = newRefreshCookies.split(' ')

                        let parsedRefreshToken = ''

                        arr.forEach(el => {
                            if (el.includes('refresh')) {
                                parsedRefreshToken = el.split('=')[1].slice(0, -1)
                            }
                        })
                        console.log('parsedRefreshToken: ', parsedRefreshToken)

                        nookies.set(ctx, 'accessToken', resRefresh.data.accessToken, {path: '/'})
                        nookies.set(ctx, 'refreshToken', parsedRefreshToken, {secure: true, httpOnly: true, path: '/'})

                        const resMe = await axios.get(`auth/me`, {
                            withCredentials: true,
                            headers: {
                                Authorization: 'Bearer ' + resRefresh.data.accessToken,
                                Cookie: `refreshToken=${parsedRefreshToken}`,
                            },
                            baseURL,
                        })
                        console.log('resMe.status: ', resMe.status)
                        console.log('resMe.data: ', resMe.data)

                        console.log(' 401 interceptors.response success')
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
            const res = await customAxios(ctx).get<authMeDataType>(`auth/me`)
            console.log('authMe serverside success')
            return res
        } catch (e) {
            console.log('Cant make authMe request')
        }
    },
    async refreshTokens(ctx: GetServerSidePropsContext) {
        try {
            const res = await customAxios(ctx).post<{accessToken: string}>(`auth/update-tokens`)

            console.log('res', res)

            nookies.set(ctx, accessToken, res.data.accessToken, {path: '/'})
            // nookies.set(ctx, 'refreshToken', res.data.accessToken, {path: '/', secure: true, httpOnly: true})

            return res.data.accessToken
        } catch (e) {
            throw new Error('Cant make request for refresh tokens')
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
