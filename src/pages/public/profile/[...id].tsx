import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {serverPublicAPI} from '@/_app/Api/server/axiosPublic'
import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {getPublicUserProfile} from '@/entities/Profile/PublicProfile/api/publicProfileServer.api'
import {PublicProfileType} from '@/entities/Profile/PublicProfile/helpers/publicProfile.schema'
import {PostsType} from '@/entities/UserPosts/api/userPosts.types'
import {UserPostItemType, UserPostsType} from '@/entities/UserPosts/helpers/UserPosts.schema'
import {Profile} from '@/widgets/Profile'
import {useRouter} from 'next/router'

type PropsType = {
    profileId: number
    serverSidePosts: UserPostItemType[]
    user: PublicProfileType
}

export const getServerSideProps = (async ctx => {
    const params = ctx.params!.id
    const profileId = params![0]

    if(profileId){
        const res = await getPublicUserProfile(+profileId)
        const rese = await serverPublicAPI.getUserPosts(+profileId)

        return { props: { profileId: +profileId,  serverSidePosts: rese!.data.items, user: res!.data } }
    }

    return {notFound: true}
}) satisfies GetServerSideProps<PropsType>



const UserProfilePage = ({profileId, serverSidePosts,user}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{
    const {query} = useRouter()

    let postId = null

    if (query.id && query.id?.length > 1) {
        postId = +query.id[1]
    }

    return (
       <Profile mode={'publick'} postId={postId} serverSidePosts={serverSidePosts} user={user}/>
    )
}


UserProfilePage.getLayout = getLayoutWithHeader
export default UserProfilePage
