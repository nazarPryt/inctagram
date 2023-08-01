// This is an example of how to access a session from an API route
import {getServerSession} from 'next-auth'

import type {NextApiRequest, NextApiResponse} from 'next'
import {authOptions} from 'pages/api/auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await getServerSession(req, res, authOptions)

        if (session) {
            res.send(JSON.stringify(session, null, 2))
        }
        res.send({message: 'error cant load session!!'})
    } catch (e) {
        res.send({message: 'error cant load session!!', errorMessage: e})
    }
}
