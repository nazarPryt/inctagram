import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {serverPublicAPI} from '@/shared/server-api/server-api'
import {PublicPostsList} from '@/widgets/PublicPostsList/PublicPostsList'
import {PublicPostsTypeItems} from '@/widgets/PublicPostsList/api/publicPosts.type'
import {RegisteredUsers} from '@/widgets/RegisteredUsers/RegisteredUsers'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

type PropsType = {
    posts: PublicPostsTypeItems[]
    totalCount: number
}
export const getStaticProps = (async context => {
    const params = {pageSize: 4, sortDirection: 'desc'}

    const totalCount = await serverPublicAPI.getAllUsersCount()
    const res = await serverPublicAPI.getAllPublicPosts(params)
    const posts = res!.data.items

    if (totalCount && posts) {
        console.log('posts', posts)

        return {props: {posts, totalCount}}
    }

    return {notFound: true}
}) satisfies GetStaticProps<PropsType>

const Home = ({posts, totalCount}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <RegisteredUsers totalCount={totalCount} />
            <PublicPostsList posts={posts} />
        </>
    )
}

Home.getLayout = getLayoutWithHeader
export default Home
