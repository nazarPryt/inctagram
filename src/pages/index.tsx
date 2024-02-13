import {AllPostsTypeItems, ParamsType} from '@/entities/Post/api/all-posts-api.type'
import {getAllPublicPosts} from '@/entities/Post/api/all-posts-server-api'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {serverPublicAPI} from '@/shared/server-api/server-api'
import {PublicPostsList} from '@/widgets/PublicPostsList/PublicPostsList'
import {RegisteredUsers} from '@/widgets/RegisteredUsers/RegisteredUsers'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

type PropsType = {
    posts: AllPostsTypeItems[]
    totalCount: number
}
export const getStaticProps = (async context => {
    const params: ParamsType = {pageSize: 4, sortDirection: 'desc'}

    const totalCount = await serverPublicAPI.getAllUsersCount()
    const res = await getAllPublicPosts(params)
    const posts = res!.data.items

    console.log(res)
    if (totalCount && posts) {
        return {props: {posts, totalCount}, revalidate: 60}
    } else {
        return {props: {posts: [], totalCount: 0}, revalidate: 60}
    }

    // return {notFound: true}
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
