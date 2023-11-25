import axios, {AxiosError} from 'axios'
import {accessToken} from 'shared/constants/constants'
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
            console.log(' 401 interceptors.response start!!!!!!!!!!')
            const originalRequest = error.config
            console.log('wait 5s start')
            await new Promise(resolve => setTimeout(resolve, 5000))
            console.log('wait 5s finished')
            console.log('originalRequest', originalRequest)
            if (error.response.status == 401 && error.config && !originalRequest._isRetry) {
                originalRequest._isRetry = true
                try {
                    console.log('ctx.req.cookies (BEFORE update-tokens)', ctx.req.cookies)
                    const refreshTokenValue = ctx.req.cookies.refreshToken

                    if (refreshTokenValue) {
                        const res = await axios.post<{accessToken: string}>(
                            `auth/update-tokens`,
                            {},
                            {withCredentials: true, headers: ctx.req.headers, baseURL}
                        )

                        // nookies.destroy(ctx, 'accessToken')
                        // nookies.destroy(ctx, 'refreshToken')

                        const newRefreshCookies = res.headers['set-cookie']?.length ? res.headers['set-cookie'][0] : ''
                        const arr = newRefreshCookies.split(' ')

                        let parsedRefreshToken = ''

                        arr.forEach(el => {
                            if (el.includes('refresh')) {
                                parsedRefreshToken = el.split('=')[1].slice(0, -1)
                            }
                        })

                        nookies.set(ctx, 'accessToken', res.data.accessToken, {path: '/'})
                        nookies.set(ctx, 'refreshToken', parsedRefreshToken, {secure: true, httpOnly: true, path: '/'})
                        //originalRequest.headers = ctx.req.headers
                        // originalRequest.headers.Authorization = 'Bearer ' + res.data.accessToken
                        // originalRequest.headers.cookie = 'refreshToken=' + parsedRefreshToken
                        // console.log('originalRequest after update: ', originalRequest)
                        console.log(' 401 interceptors.response success')
                        return await instance.request(originalRequest)
                    } else {
                        console.log('refreshToken is undefined')
                        return
                    }
                } catch (e) {
                    console.log('User is not authorized (in interceptors.response)')
                    // await serverAuthAPI.logOut(ctx)
                    return
                }
            }
            throw error
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
            return res.data
        } catch (e) {
            console.log('Cant make authMe request ')
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
            console.log('Cant make request for refresh tokens')
        }
    },
    async logOut(ctx: GetServerSidePropsContext) {
        try {
            console.log('logOut serverside')
            nookies.destroy(ctx, 'accessToken')
            nookies.destroy(ctx, 'refreshToken')
            console.log('logOut serverside is success')
        } catch (e) {
            console.log('Cant make logOut request: ')
        }
    },
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
