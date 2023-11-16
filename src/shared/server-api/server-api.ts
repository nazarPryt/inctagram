import axios from 'axios'
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

            if (error.response.status == 401 && error.config && !error.config._isRetry) {
                originalRequest._isRetry = true
                try {
                    console.log(' 401 interceptors.response start!!!!!!!!!!')
                    console.log('ctx.req.cookies (BEFORE update-tokens)', ctx.req.cookies)
                    const refreshTokenValue = ctx.req.cookies.refreshToken
                    nookies.set(ctx, 'test1', 'test1', {secure: false})
                    const responce = NextResponse.next()
                    responce.cookies.set('test', 'test', {secure: false})

                    console.log('tets')

                    console.log(responce.cookies.get('test'), 'test')

                    const cookies = nookies.get(ctx)

                    console.log(cookies, 'cookies')

                    if (refreshTokenValue) {
                        const res = await instance.post<{accessToken: string}>(
                            `auth/update-tokens`,
                            {},
                            {withCredentials: true, headers: {Cookie: `refreshToken=${refreshTokenValue}`}}
                        )

                        nookies.destroy(ctx, 'accessToken')
                        nookies.destroy(ctx, 'refreshToken')
                        console.log(' 401 interceptors.response finished')
                        console.log('ctx.req.cookies (AFTER update-tokens): ', ctx.req.cookies)
                        originalRequest._isRetry = false

                        ctx.req.cookies['accessToken'] = res.data.accessToken
                        console.log('originalRequest._isRetry: ', originalRequest._isRetry)

                        const cookies = res.headers['set-cookie']?.length ? res.headers['set-cookie'][0] : ''
                        const arr = cookies.split(' ')

                        let refreshToken = ''

                        arr.forEach(el => {
                            if (el.includes('refresh')) {
                                refreshToken = el.split('=')[1].slice(0, -1)
                            }
                        })

                        nookies.set(ctx, 'accessToken', res.data.accessToken, {secure: false})
                        nookies.set(ctx, 'refreshToken', refreshToken, {secure: true, httpOnly: true, path: '/'})

                        console.log(' 401 interceptors.response success')
                        return instance.request(originalRequest)
                    } else {
                        console.log('refreshToken is undefined')
                        return
                    }
                } catch (e) {
                    cookies().set('test', 'test')
                    originalRequest._isRetry = false
                    console.log('User is not authorized (in interceptors.response)')
                    await serverAuthAPI.logOut(ctx)
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
            return 'Cant make authMe request'
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
        try {
            console.log('logOut serverside')
            const res = await customAxios(ctx).post(`auth/logout`)
            nookies.destroy(ctx, accessToken)
            console.log('logOut serverside is success')
            console.log('ctx.req.cookies (AFTER logOut serverside): ', ctx.req.cookies)
            return res.data
        } catch (e) {
            return 'Cant make authMe request'
        }
    },
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
