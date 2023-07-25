import {NextAuthOptions, User} from 'next-auth'
import {NextApiRequest, NextApiResponse} from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'
import {PATH} from 'shared/constants/PATH'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import {serverAuthAPI} from 'shared/server-api/server-api'
import nookies, {destroyCookie} from 'nookies'
import {accessToken} from 'shared/constants/constants'

//https://github.com/nextauthjs/next-auth/discussions/4428
//https://stackoverflow.com/questions/67594977/how-to-send-httponly-cookies-client-side-when-using-next-auth-credentials-provid/69418553#69418553
//https://stackoverflow.com/questions/68235182/nextjs-with-next-auth-setting-cookie-received-from-node-js

// type NextAuthOptionsCallback = (req: NextApiRequest, res: NextApiResponse) => NextAuthOptions
//
// export const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
//     return {
//         session: {
//             strategy: 'jwt',
//         },
//         debug: process.env.NODE_ENV !== 'production',
//         secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
//         pages: {
//             signIn: PATH.LOGIN,
//             error: PATH.LOGIN,
//             // newUser: PATH.PROFILE_SETTINGS,
//         },
//         callbacks: {
//             async jwt({token, user}) {
//                 if (user) {
//                     token.id = +user.id
//                     token.name = user.name
//                     token.email = user.email
//                 }
//                 return token
//             },
//             session: async ({session, token}) => {
//                 session.user.userId = token.id as number
//                 session.user.name = token.name as string
//                 session.user.email = token.email as string
//                 return session
//             },
//             // async jwt({token, user}) {
//             //     return {...token, ...user}
//             // },
//         },
//         // events: {
//         //     async signOut() {
//         //         destroyCookie({res}, 'refreshToken')
//         //         destroyCookie({res}, accessToken)
//         //     },
//         // },
//         providers: [
//             GoogleProvider({
//                 clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
//                 clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
//             }),
//             GitHubProvider({
//                 clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
//                 clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
//             }),
//             CredentialsProvider({
//                 credentials: {
//                     accessToken: {type: 'string'},
//                 },
//                 // id: 'credentials',
//                 // name: 'credentials',
//                 async authorize(credentials) {
//                     try {
//                         const token = credentials!.accessToken
//
//                         if (token) {
//                             nookies.set({res}, accessToken, token)
//
//                             const meResponse = await serverAuthAPI.authMe(token)
//
//                             const userData: User & {userId: number} = {
//                                 name: meResponse.userName,
//                                 email: meResponse.email,
//                                 id: meResponse.userId + '',
//                                 userId: meResponse.userId,
//                             }
//                             return userData
//                         }
//
//                         return null
//                     } catch (e) {
//                         console.log(e)
//                         return null
//                     }
//                 },
//             }),
//         ],
//     }
// }
//
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     return NextAuth(req, res, nextAuthOptions(req, res))
// }

import NextAuth from 'next-auth'

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
    pages: {
        signIn: PATH.LOGIN,
        error: PATH.LOGIN,
    },
    callbacks: {
        // async jwt({token, user}) {
        //     if (user) {
        //         token.id = +user.id
        //         token.name = user.name
        //         token.email = user.email
        //     }
        //     return token
        // },
        // session: async ({session, token}) => {
        //     session.user.userId = token.id as number
        //     session.user.name = token.name as string
        //     session.user.email = token.email as string
        //     return session
        // },
        // async jwt({token, user}) {
        //     return {...token, ...user}
        // },
    },
    // events: {
    //     async signOut() {
    //         destroyCookie({res}, 'refreshToken')
    //         destroyCookie({res}, accessToken)
    //     },
    // },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            credentials: {
                accessToken: {type: 'string'},
            },
            id: 'credentials',
            name: 'credentials',
            async authorize(credentials) {
                // try {
                //     const token = credentials!.accessToken
                //
                //     if (token) {
                // nookies.set({res}, accessToken, token)
                //
                // const meResponse = await serverAuthAPI.authMe(token)

                const userData = {
                    name: 'meResponse.userName',
                    email: 'meResponse.email',
                    id: "meResponse.userId + ''",
                    userId: 3,
                }
                return userData
                // }
                //
                // return null
                // } catch (e) {
                //     console.log(e)
                //     return null
                // }
            },
        }),
    ],
}

export default NextAuth(authOptions)
