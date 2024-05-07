// Import necessary modules and functions
import {type NextRequest, NextResponse} from 'next/server'
//https://medium.com/@fran_wrote/fetch-with-token-and-refresh-in-next-js-60fd13c6f1b1
// Define the routes that require authentication
const protectedRoutes = ['/profile', '/profile/*']

// Middleware function to handle authentication and redirection
export async function middleware(request: NextRequest) {
    // Extract the pathname from the request URL
    const pathname = request.nextUrl.pathname

    // Get user credentials from the request

    // Check if the current route is protected and user credentials are missing
    // or the refresh token is not valid
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        const credentials = false

        console.log('middleware')
        // Delete the "user" cookie to log the user out
        request.cookies.delete('user')

        // Create a redirection response to the "/auth" endpoint
        const response = NextResponse.redirect(new URL('/auth/login', request.url))

        // Delete the "user" cookie from the response as well
        response.cookies.delete('user')

        // Return the redirection response
        return response
    }

    // If the route is not protected or the user has valid credentials, continue to the next middleware
    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
