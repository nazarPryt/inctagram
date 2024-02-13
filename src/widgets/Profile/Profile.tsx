import {useEffect, useState} from 'react'

import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PostsType} from '@/entities/UserPosts/api/types'
import {ViewUserPost} from '@/entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from '@/entities/ViewUserPost/api/get-post-api'
import {UserPostsModal} from '@/widgets/UserPostsModal/UserPostsModal'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

import {ProfileWrapper} from './Profile.styled'
import {ProfileHeader, ProfileHeaderMode} from './ui/ProfileHeader/ProfileHeader'
import {ProfilePostsList} from './ui/ProfilePostsList/ProfilePostsList'

type ProfileType = {
    isLoadingPosts?: boolean
    isLoadingUser?: boolean
    mode: ProfileHeaderMode
    user: PublicProfileType
    userPosts: Pick<PostsType, 'items'>
}
export const Profile = ({isLoadingPosts, isLoadingUser, mode, user, userPosts}: ProfileType) => {
    return (
        <>
            <ProfileWrapper>
                <ProfileHeader isLoadingUser={isLoadingUser} mode={mode} user={user} />
                <ProfilePostsList isLoadingPosts={isLoadingPosts} posts={userPosts} />
            </ProfileWrapper>
        </>
    )
}
