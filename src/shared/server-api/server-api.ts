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
            console.log(' 401 interceptors.response start!!!!!!!!!!')
            console.log('ctx.req.cookies (BEFORE update-tokens)', ctx.req.cookies)
            const refreshTokenValue = ctx.req.cookies.refreshToken
            console.log('refreshTokenValue: ', refreshTokenValue)

            originalRequest._isRetry = false
            const isUserAuthorised = Boolean(
                error.response.status == 401 && refreshTokenValue && error.config && !error.config._isRetry
            )

            console.log('isUserAuthorised: ', isUserAuthorised)
            if (isUserAuthorised) {
                try {
                    const res = await axios.post<{accessToken: string}>(
                        `${baseURL}auth/update-tokens`,
                        {},
                        {withCredentials: true, headers: {Cookie: `refreshToken=${refreshTokenValue}`}}
                    )
                    console.log('update-tokens res.headers: ', res.headers)
                    // nookies.destroy(ctx, 'accessToken')
                    // nookies.destroy(ctx, 'refreshToken')
                    //
                    // console.log('ctx.req.cookies (old cookies destroyed?): ', ctx.req.cookies)
                    //
                    // console.log('originalRequest._isRetry: ', originalRequest._isRetry)

                    // nookies.set(ctx, 'accessToken', res.data.accessToken, {path: '/'})
                    // nookies.set(ctx, 'refreshToken', parsedRefreshToken, {secure: true, httpOnly: true, path: '/'})
                    if (res.status == 200) {
                        const newRefreshCookies = res.headers['set-cookie']?.length ? res.headers['set-cookie'][0] : ''
                        const arr = newRefreshCookies.split(' ')

                        let parsedRefreshToken = ''

                        arr.forEach(el => {
                            if (el.includes('refresh')) {
                                parsedRefreshToken = el.split('=')[1].slice(0, -1)
                            }
                        })
                        console.log('parsedRefreshToken: ', parsedRefreshToken)

                        ctx.res.setHeader('Set-Cookie', [
                            `refreshToken=${parsedRefreshToken}`,
                            `accessToken=${res.data.accessToken}`,
                        ])
                        console.log(' 401 interceptors.response finished successfully')
                        originalRequest._isRetry = true
                        return instance.request(originalRequest)
                    } else {
                        console.log('update-tokens res.status: ', res.status)
                        await serverAuthAPI.logOut(ctx)
                        return
                    }
                } catch (e) {
                    console.log('User is not authorized (refreshToken is not valid)', e)
                    await serverAuthAPI.logOut(ctx)
                    throw error
                }
            }
            console.log('User is not authorized (doesnt have the refreshToken)')
            await serverAuthAPI.logOut(ctx)
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
            console.log('Because cant make authMe request: ', e)
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
            console.log('logOut serverside start')
            nookies.destroy(ctx, 'accessToken')
            nookies.destroy(ctx, 'refreshToken')
            console.log('logOut serverside finished (all cookies were removed)')
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
