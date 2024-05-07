//https://gist.github.com/xstevenyung/560c880992b3ad6892923cbad582bd81  <-- Axios Instance Example

import {appSettings} from '@/_app/AppSettings'
import {MeDataType} from '@/features/Auth/Me/api/me.types'
import axios from 'axios'
import {GetServerSidePropsContext, NextApiRequest, NextApiResponse} from 'next'
import nookies from 'nookies'

const baseURL = appSettings.env.BASE_URL

export const axiosAuth = (req: NextApiRequest, res: NextApiResponse) => {
    const instance = axios.create({
        baseURL,
        withCredentials: true,
    })

    instance.interceptors.request.use(
        config => {
            const accessToken = req.cookies.accessToken

            console.log('instance.interceptors.request accessToken: ', accessToken)
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
                    const refreshTokenValue = req.cookies.refreshToken

                    if (refreshTokenValue) {
                        const resRefresh = await axios.post<{accessToken: string}>(
                            `auth/update-tokens`,
                            {},
                            {baseURL, headers: req.headers, withCredentials: true}
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

                        res.setHeader('Set-Cookie', [
                            `${newRefreshToken}`,
                            `${appSettings.constants.accessToken}=${resRefresh.data.accessToken}; Path=/`,
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

class serverAuth {
    async authMe(req: NextApiRequest, res: NextApiResponse) {
        console.log('authMe serverside start')
        try {
            const response = await axiosAuth(req, res).get<MeDataType>(`auth/me`)

            console.log('authMe serverside success')

            return response.data
        } catch (e) {
            console.log('Cant make authMe request')
        }
    }
    async logOut(ctx: GetServerSidePropsContext) {
        console.log('logOut serverside')
        nookies.destroy(ctx, appSettings.constants.accessToken)
        nookies.destroy(ctx, appSettings.constants.refreshToken)
        console.log('logOut serverside is success')
    }
}
export const serverAuthAPI = new serverAuth()
