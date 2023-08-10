import {withAuth} from 'next-auth/middleware'

export default withAuth({
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
})

export const config = {matcher: ['/profilee/:path*']}
