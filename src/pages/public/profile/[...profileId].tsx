import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {useState} from 'react'

import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {getPublicUserProfile} from '@/entities/PublicProfile/api/public-profile-server-api'
import {PostsType} from '@/entities/UserPosts/api/types'
import {ViewUserPost} from '@/entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from '@/entities/ViewUserPost/api/get-post-api'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {serverPublicAPI} from '@/shared/server-api/server-api'
import {Profile} from '@/widgets/Profile/Profile'
import {UserPostsModal} from '@/widgets/UserPostsModal/UserPostsModal'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

type PropsType = {
    profileId: number
    user: PublicProfileType
    userPosts: Pick<PostsType,'items'>
}

export const getServerSideProps = (async ctx => {
    const params = ctx.params!.profileId
    const profileId = params![0]

    if(profileId){
        const res = await getPublicUserProfile(+profileId)
        const rese = await serverPublicAPI.getUserPosts(+profileId)

        return { props: { profileId: +profileId,  user: res!.data, userPosts: rese!.data } }
    }

    return {notFound: true}
}) satisfies GetServerSideProps<PropsType>



const UserProfilePage = ({profileId, user,userPosts}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{
    return (
       <Profile mode={'publick'} user={user} userPosts={userPosts}/>
    )
}


UserProfilePage.getLayout = getLayoutWithHeader
export default UserProfilePage
