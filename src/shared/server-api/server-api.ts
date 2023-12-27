import axios from 'axios'
import {accessToken, refreshToken} from 'shared/constants/constants'
import {GetServerSidePropsContext} from 'next'
import nookies from 'nookies'
import type {NextRequest, NextResponse} from 'next/server'

//https://gist.github.com/xstevenyung/560c880992b3ad6892923cbad582bd81  <-- Axios Instance Example
// const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL as string

export const customAxios = (request: NextRequest, response: NextResponse) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

    const instance = axios.create({
        withCredentials: true,
        baseURL,
    })

    instance.interceptors.request.use(
        config => {
            const token = request.cookies.get(accessToken)

            if (accessToken) {
                config.headers.Authorization = 'Bearer ' + token
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
                    // const requestHeaders = new Headers(request.headers.keys())
                    const refreshTokenValue = request.headers.keys()

                    if (refreshTokenValue) {
                        const resRefresh = await axios.post<{accessToken: string}>(
                            `auth/update-tokens`,
                            {},
                            {withCredentials: true, headers: {}, baseURL}
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
                        response.headers.set('Set-Cookie', `${newRefreshToken}`)
                        response.headers.set(`${accessToken}`, `${resRefresh.data.accessToken}; Path=/`)

                        console.log('resMe.data: ', resMe.data)
                        return (originalRequest.data = resMe.data)
                    } else {
                        console.log('refreshToken is undefined')
                        return
                    }
                } catch (e) {
                    originalRequest._isRetry = false
                    console.log('User is not authorized (in interceptors.response)')
                    await serverAuthAPI.logOut(response)
                    return
                }
            }
            return
        }
    )
    return instance
}

export const serverAuthAPI = {
    async authMe(request: NextRequest, response: NextResponse) {
        console.log('authMe serverside start')
        try {
            const res = await customAxios(request, response).get<authMeDataType>(`auth/me`)
            console.log('authMe serverside success')
            return res
        } catch (e) {
            console.log('Cant make authMe request')
        }
    },
    async logOut(response: NextResponse) {
        console.log('logOut serverside')
        response.headers.delete(accessToken)
        console.log('logOut serverside is success')
    },
}

/////////////////////////////////////////////////////////////////////////

type authMeDataType = {
    userId: number
    userName: string
    email: string
}
