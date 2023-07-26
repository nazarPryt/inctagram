import NextAuth, {DefaultSession, User} from 'next-auth'

declare module 'next-auth' {
    interface User {
        userId: number
        id: string
        email: string
        name: string
    }
    interface Session {
        user: {
            userId: number
            id: string
            email: string
            name: string
        }
    }
}
