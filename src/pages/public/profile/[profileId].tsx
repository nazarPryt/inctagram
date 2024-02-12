import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {getPublicUserProfile} from '@/entities/PublicProfile/api/public-profile-server-api'
import {PostsType} from '@/entities/UserPosts/api/types'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {serverPublicAPI} from '@/shared/server-api/server-api'
import {Profile} from '@/widgets/Profile/Profile'

type PropsType = {
    profileId: number
    user: PublicProfileType
    userPosts: Pick<PostsType,'items'>
}

export const getServerSideProps = (async ctx => {
    const profileId = ctx.params!.profileId

    if(profileId){
        const res = await getPublicUserProfile(+profileId)
        const rese = await serverPublicAPI.getUserPosts(+profileId)

        return { props: { profileId: +profileId,  user: res!.data, userPosts: rese!.data } }
    }

    return {notFound: true}
}) satisfies GetServerSideProps<PropsType>



const UserProfilePage = ({profileId, user,userPosts}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{
    return (
       <Profile user={user} userPosts={userPosts}/>
    )
}


UserProfilePage.getLayout = getLayoutWithHeader
export default UserProfilePage
