import {log} from 'node:util'

import {appSettings} from '@/_app/AppSettings'
import {protectedRoutes, unProtectedRoutes} from '@/_app/AppSettings/routes'
import {MeDataType} from '@/features/Auth/Me/api/me.types'
import axios from 'axios'
import {cookies} from 'next/headers'
import {type NextRequest, NextResponse} from 'next/server'
//https://medium.com/@fran_wrote/fetch-with-token-and-refresh-in-next-js-60fd13c6f1b1

const baseURL = appSettings.env.BASE_URL

interface TokensResponse {
    accessToken: string
    refreshToken: string
}
async function refreshTokens(refresh: string): Promise<TokensResponse> {
    try {
        const response = await fetch(`${baseURL}auth/update-tokens`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                cookie: `${appSettings.constants.refreshToken}=${refresh}`,
            },
            method: 'POST',
        })

        console.log('refreshTokens-response.status: ', response.status)
        console.log('refreshTokens-response.headers: ', response.headers)
        // if (!response.ok) {
        //     throw new Error(`HTTP refreshTokens error! Status: ${response.status}`)
        // }

        const responseData = await response.json()
        const refreshSetCookie = response.headers.getSetCookie()

        console.log('responseData: ', responseData)
        console.log('refreshSetCookie: ', refreshSetCookie)

        return {
            accessToken: responseData.accessToken,
            refreshToken: refreshSetCookie[0],
        }
    } catch (error) {
        console.error('refreshTokensError: ', error)
        throw error // Rethrow the error to handle it in the calling code
    }
}
async function me(accessToken: string) {
    const url = `${baseURL}auth/me`

    console.log('url: ', url)
    try {
        const response = await fetch(url, {
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            method: 'GET',
        })

        console.log('me-response.status: ', response.status)
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`)
        // }

        return await response.json()
    } catch (error) {
        console.error('meRequestError: ', error)
        throw error // Rethrow the error to handle it in the calling code
    }
}
export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const refreshTokenValue = request.cookies.get(appSettings.constants.refreshToken)?.value
    const accessTokenValue = cookies().get(appSettings.constants.accessToken)?.value

    if (!accessTokenValue) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    if (unProtectedRoutes.some(route => pathname.startsWith(route))) {
        console.log('middleware UNProtected')

        console.log('refreshTokenValue: ', refreshTokenValue)
        console.log('accessTokenValue: ', accessTokenValue)

        try {
            const resMe = await me(accessTokenValue)

            console.log('resMe: ', resMe)

            if (resMe.userId) {
                return NextResponse.redirect(new URL('/profile', request.url))
            } else if (resMe.statusCode === 401) {
                if (refreshTokenValue) {
                    const responseRefresh = await refreshTokens(refreshTokenValue)

                    console.log('responseRefresh: ', responseRefresh)
                    const user = await me(responseRefresh.accessToken)

                    if (user) {
                        return NextResponse.redirect(new URL('/profile', request.url), {
                            headers: {
                                'Set-Cookie': [
                                    `${appSettings.constants.accessToken}=${responseRefresh.accessToken}; Path=/; Secure; SameSite=None`,
                                    `${responseRefresh.refreshToken}`,
                                ],
                            } as any,
                        })
                    }
                }

                return NextResponse.next()
            }
        } catch (e) {
            console.log('middleware Catch error: ', e)

            return NextResponse.next()
        }
    }
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        try {
            const resMe = await me(accessTokenValue)

            console.log('resMe: ', resMe)

            if (resMe.userId) {
                return NextResponse.next()
            } else if (resMe.statusCode === 401) {
                if (refreshTokenValue) {
                    const responseRefresh = await refreshTokens(refreshTokenValue)

                    console.log('responseRefresh: ', responseRefresh)
                    const user = await me(responseRefresh.accessToken)

                    if (user) {
                        return NextResponse.next({
                            headers: {
                                'Set-Cookie': [
                                    `${appSettings.constants.accessToken}=${responseRefresh.accessToken}; Path=/; Secure; SameSite=None`,
                                    `${responseRefresh.refreshToken}`,
                                ],
                            } as any,
                        })
                    }
                }

                return NextResponse.redirect(new URL('/auth/login', request.url))
            }
        } catch (e) {
            console.log('middleware Catch error: ', e)

            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
    }

    // If the route is not protected or the user has valid credentials, continue to the next middleware
    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
