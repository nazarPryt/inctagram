import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {PostsType} from '@/entities/UserPosts/api/types'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {serverPublicAPI} from '@/shared/server-api/server-api'
import {PublicProfileType} from '@/shared/server-api/server-api.type'
import {PublicProfile} from '@/widgets/PublicProfile/PublicProfile'

type PropsType = {
    user: PublicProfileType
    userPosts: Pick<PostsType,'items'>
}

export const getServerSideProps = (async ctx => {
    const profileId = ctx.params!.profileId

    if(profileId){
        const res = await serverPublicAPI.getPublicUserProfile(+profileId)
        const rese = await serverPublicAPI.getUserPosts(+profileId)


        return { props: { user: res!.data,  userPosts: rese!.data } }
    }

    return {notFound: true}
}) satisfies GetServerSideProps<PropsType>



const PublicUserProfilePage = ({user, userPosts}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{



    return (
       <PublicProfile user={user} userPosts={userPosts}/>
    )
}



PublicUserProfilePage.getLayout = getLayoutWithHeader
export default PublicUserProfilePage
