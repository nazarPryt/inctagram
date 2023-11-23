import axios, {AxiosHeaders} from 'axios'
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
            const originalRequest = error.config
            console.log('~~~~~~~~ 401 interceptors.response start ~~~~~~~~')
            console.log('ctx.req.cookies (BEFORE update-tokens)', ctx.req.cookies)
            const oldRefreshToken = ctx.req.cookies.refreshToken as string
            const isUserAuthorised = Boolean(
                error.response.status == 401 && oldRefreshToken && error.config && !originalRequest._retry
            )

            if (isUserAuthorised) {
                try {
                    originalRequest._retry = true
                    await serverAuthAPI.refreshTokens(ctx, baseURL, oldRefreshToken)
                    // originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken
                    console.log('originalRequest', originalRequest)
                    console.log(' 401 interceptors.response finished successfully')
                    console.log('~~~~~~~~ 401 interceptors.response finished ~~~~~~~~~~~')
                    return instance.request(originalRequest)
                } catch (e) {
                    console.log('User is not authorized (refreshToken is not valid)')
                    await serverAuthAPI.logOut(ctx)
                    console.log('~~~~~~~~ 401 interceptors.response finished ~~~~~~~~~~~')
                    return Promise.reject(e)
                }
            }
            console.log('User is not authorized (doesnt have the refreshToken)')
            await serverAuthAPI.logOut(ctx)
            console.log('~~~~~~~~ 401 interceptors.response finished ~~~~~~~~~~~')
            return Promise.reject(error)
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
            console.log('authMe request was failed')
        }
    },
    async refreshTokens(ctx: GetServerSidePropsContext, baseURL: string, oldRefreshToken: string) {
        try {
            const res = await axios.post<{accessToken: string}>(
                `${baseURL}auth/update-tokens`,
                {},
                {withCredentials: true, headers: {Cookie: `refreshToken=${oldRefreshToken}`}}
            )
            console.log('new accessToken: ', res.data.accessToken)
            const newRefreshToken = res.headers['set-cookie']![0]
            ctx.res.setHeader('Set-Cookie', [`${newRefreshToken}`, `accessToken=${res.data.accessToken}; Path=/`])
            return res
        } catch (e) {
            console.log('Cant make request for refresh tokens')
        }
    },
    async logOut(ctx: GetServerSidePropsContext) {
        console.log('logOut serverside start')
        // nookies.destroy(ctx, 'accessToken')
        // nookies.destroy(ctx, 'refreshToken')
        console.log('logOut serverside finished (all cookies were removed)')
    },
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
