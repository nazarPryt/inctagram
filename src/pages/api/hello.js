// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getServerSession} from 'next-auth/next'
import {authOptions} from './auth/[...nextauth]'
import nookies from 'nookies'

export default async function handler(req, res) {
    // const session = await getServerSession(req, res, authOptions)
    // if (session) {
    nookies.set(res, 'nazar-server-triggered', 'sdfsdfsdf', {path: '/'})

    const blogData = [
        {
            id: 1,
            title: 'Blog 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            image: '/images/blog1.jpg',
        },
        {
            id: 2,
            title: 'Blog 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            image: '/images/blog2.jpg',
        },
    ]
    res.status(200).json(blogData)
}
