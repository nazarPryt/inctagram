import {serverAuthAPI} from '@/_app/Api/server/axiosAuth'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await serverAuthAPI.authMe(req, res)

        if (user) {
            console.log(user)
            res.status(200).json({user})
        }
    } catch (error) {
        console.log('catch (error')
        res.status(500).json({error: 'Internal Server Error'})
    }
}
