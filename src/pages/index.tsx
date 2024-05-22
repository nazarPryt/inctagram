import {serverPublicAPI} from '@/_app/Api/server/axiosPublic'
import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {getAllPublicPosts} from '@/entities/Post/api/allPostsServer.api'
import {AllPostsItemType} from '@/entities/Post/helpers/AllPosts.schema'
import {PublicPostsList} from '@/widgets/PublicPostsList'
import {RegisteredUsers} from '@/widgets/RegisteredUsers'
import {GetStaticProps, InferGetStaticPropsType} from 'next'

type PropsType = {
    posts: AllPostsItemType[]
    totalCount: number
}
export const getStaticProps = (async context => {
    const totalCount = await serverPublicAPI.getAllUsersCount()
    const res = await getAllPublicPosts()
    const posts = res!.data.items

    if (totalCount && posts) {
        return {props: {posts, totalCount}, revalidate: 60}
    } else {
        return {props: {posts: [], totalCount: 0}, revalidate: 60}
    }
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
