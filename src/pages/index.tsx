import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {serverPublicAPI} from '@/shared/server-api/server-api'
import {PublicPostsList} from '@/widgets/PublicPostsList/PublicPostsList'
import {PublicPostsType, PublicPostsTypeItems} from '@/widgets/PublicPostsList/api/publicPosts.type'
import {RegisteredUsers} from '@/widgets/RegisteredUsers/RegisteredUsers'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

type PropsType = {
    posts: PublicPostsTypeItems[]
    totalCount: number
}
export const getStaticProps = (async context => {
    const totalCount = await serverPublicAPI.getAllUsersCount()
    const posts = await serverPublicAPI.getAllPublicPosts()

    console.log('posts', posts)
    if (totalCount && posts) {
        return {props: {posts, totalCount}}
    }

    return {props: {posts: [], totalCount: 0}}
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
