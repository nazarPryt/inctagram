import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {PATH} from './shared/constants/PATH'
import {accessToken} from './shared/constants/constants'
import nookies from 'nookies'

export const protectedRoutes = ['/profile']
export const authRoutes = ['/auth/login']
export const publicRoutes = ['/about', '/']

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get(accessToken)?.value

    if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
        request.cookies.delete(accessToken)
        const response = NextResponse.redirect(new URL('/auth/login', request.url))
        response.cookies.delete(accessToken)

        return response
    }

    if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
        return NextResponse.redirect(new URL('/profile', request.url))
    }
}
