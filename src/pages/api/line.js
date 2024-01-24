import nookies from 'nookies'

export default async function handler(req, res) {
    // const session = await getServerSession(req, res, authOptions)
    // if (session) {
    console.log(
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    )
    console.log(
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    )
    console.log(
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    )

    const blogData = [
        {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            id: 1,
            image: '/images/blog1.jpg',
            title: 'Blog 1',
        },
        {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            id: 2,
            image: '/images/blog2.jpg',
            title: 'Blog 2',
        },
    ]

    res.status(200).json(blogData)
}
