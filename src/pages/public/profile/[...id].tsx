import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {serverPublicAPI} from '@/_app/Api/server/axiosPublic'
import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {getPublicUserProfile} from '@/entities/PublicProfile/api/public-profile-server-api'
import {PostsType} from '@/entities/UserPosts/api/types'
import {Profile} from '@/widgets/Profile'
import {useRouter} from 'next/router'

type PropsType = {
    profileId: number
    user: PublicProfileType
    userPosts: Pick<PostsType,'items'>
}

export const getServerSideProps = (async ctx => {
    const params = ctx.params!.id
    const profileId = params![0]

    if(profileId){
        const res = await getPublicUserProfile(+profileId)
        const rese = await serverPublicAPI.getUserPosts(+profileId)

        return { props: { profileId: +profileId,  user: res!.data, userPosts: rese!.data } }
    }

    return {notFound: true}
}) satisfies GetServerSideProps<PropsType>



const UserProfilePage = ({profileId, user,userPosts}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{
    const {query} = useRouter()

    let postId = null

    if (query.id && query.id?.length > 1) {
        postId = +query.id[1]
    }

    return (
       <Profile mode={'publick'} postId={postId} user={user} userPosts={userPosts}/>
    )
}


UserProfilePage.getLayout = getLayoutWithHeader
export default UserProfilePage
