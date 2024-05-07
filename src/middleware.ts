// Import necessary modules and functions
import {appSettings} from '@/_app/AppSettings'
import axios from 'axios'
import {cookies} from 'next/headers'
import {type NextRequest, NextResponse} from 'next/server'
//https://medium.com/@fran_wrote/fetch-with-token-and-refresh-in-next-js-60fd13c6f1b1
// Define the routes that require authentication
const protectedRoutes = ['/profile', '/profile/*']
const baseURL = appSettings.env.BASE_URL

// Middleware function to handle authentication and redirection
export async function middleware(request: NextRequest) {
    // Extract the pathname from the request URL
    const pathname = request.nextUrl.pathname

    // Get user credentials from the request

    // Check if the current route is protected and user credentials are missing
    // or the refresh token is not valid
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        const credentials = false
        const refreshTokenValue = request.cookies.get(appSettings.constants.refreshToken)?.value
        const accessTokenValue = cookies().get(appSettings.constants.accessToken)?.value

        console.log('accessTokenValue', accessTokenValue)

        if (refreshTokenValue) {
            const resRefresh = await axios.post<{accessToken: string}>(
                `auth/update-tokens`,
                {},
                {baseURL, withCredentials: true}
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

            // res.setHeader('Set-Cookie', [
            //     `${newRefreshToken}`,
            //     `${appSettings.constants.accessToken}=${resRefresh.data.accessToken}; Path=/`,
            // ])
        }
        console.log('middleware')

        // Create a redirection response to the "/auth" endpoint
        const response = NextResponse.redirect(new URL('/auth/login', request.url))

        return response
    }

    // If the route is not protected or the user has valid credentials, continue to the next middleware
    return NextResponse.next({
        headers: {
            'Set-Cookie': [
                `ac=newAccessToken; Path=/; Secure; SameSite=None;`,
                `re=newRefreshToken; Path=/; Secure; HttpOnly; SameSite=None;`,
                `redds=newRefreshToken; Path=/; Secure; HttpOnly; SameSite=None;`,
            ],
        } as any,
    })
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
