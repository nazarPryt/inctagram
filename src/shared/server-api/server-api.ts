import axios from 'axios'
import {accessToken} from 'shared/constants/constants'
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
                    console.log(' 401 interceptors.response start')
                    console.log('ctx.req.cookies', ctx.req.cookies)

                    const res = await instance.post<{accessToken: string}>(`auth/update-tokens`)
                    console.log(' 401 interceptors.response finished')

                    console.log('update-tokens res: ', res)

                    const cookies = res.headers['set-cookie']?.length ? res.headers['set-cookie'][0] : ''
                    const arr = cookies.split(' ')

                    let refreshToken = ''

                    arr.forEach(el => {
                        if (el.includes('refresh')) {
                            refreshToken = el.split('=')[1].slice(0, -1)
                        }
                    })

                    nookies.set(ctx, accessToken, res.data.accessToken, {path: '/'})
                    nookies.set(ctx, 'refreshToken', refreshToken, {path: '/', secure: true, httpOnly: true})

                    return instance.request(originalRequest)
                } catch (e) {
                    console.log('User is not authorized (in interceptors.response)')
                }
            }
            throw error
        }
    )
    return instance
}

export const serverAuthAPI = {
    async authMe(ctx: GetServerSidePropsContext) {
        console.log('authMe serverside')
        try {
            const res = await customAxios(ctx).get<authMeDataType>(`auth/me`)

            return res.data
        } catch (e) {
            throw new Error('Cant make authMe request')
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
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
