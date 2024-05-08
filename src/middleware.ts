import {appSettings} from '@/_app/AppSettings'
import {MeDataType} from '@/features/Auth/Me/api/me.types'
import axios from 'axios'
import {cookies} from 'next/headers'
import {type NextRequest, NextResponse} from 'next/server'
//https://medium.com/@fran_wrote/fetch-with-token-and-refresh-in-next-js-60fd13c6f1b1

const protectedRoutes = ['/profile', '/profile/*']
const baseURL = appSettings.env.BASE_URL

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        console.log('middleware protected route')
        const refreshTokenValue = request.cookies.get(appSettings.constants.refreshToken)?.value
        const accessTokenValue = cookies().get(appSettings.constants.accessToken)?.value

        console.log('refreshTokenValue: ', refreshTokenValue)
        console.log('accessTokenValue: ', accessTokenValue)

        if (!refreshTokenValue) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
        try {
            const resRefresh = await axios.post<{accessToken: string}>(
                `auth/update-tokens`,
                {},
                {baseURL, withCredentials: true}
            )

            console.log('resRefresh.status: ', resRefresh.status)
            console.log('resRefresh.headers: ', resRefresh.headers)

            // const newRefreshToken = resRefresh.headers['set-cookie']![0]
            const newRefreshToken = resRefresh.headers

            const user = await axios.get<MeDataType>(`auth/me`, {
                baseURL,
                headers: {
                    Authorization: 'Bearer ' + resRefresh.data.accessToken,
                },
                withCredentials: true,
            })

            console.log('user: ', user)

            if (user.data.userId) {
                return NextResponse.next({
                    headers: {
                        'Set-Cookie': [`${appSettings.constants.accessToken}=${resRefresh.data.accessToken}; Path=/`],
                        newRefreshToken,
                    } as any,
                })
            } else {
                return NextResponse.redirect(new URL('/auth/login', request.url))
            }
        } catch (e) {
            console.log('catch e: ', e)

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
