import {useState} from 'react'

import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PostsType} from '@/entities/UserPosts/api/types'
import {ViewUserPost} from '@/entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from '@/entities/ViewUserPost/api/get-post-api'
import {ComponentMode} from '@/shared/hooks/useMode'
import {Loader, Modal} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

import {ProfileWrapper} from './Profile.styled'
import {ProfileHeader} from './ui/ProfileHeader'
import {ProfilePostsList} from './ui/ProfilePostsList'

type ProfileType = {
    isLoadingPosts?: boolean
    isLoadingUser?: boolean
    mode: ComponentMode
    postId: null | number
    user: PublicProfileType | undefined
    userPosts: Pick<PostsType, 'items'> | undefined
}
export const Profile = ({isLoadingPosts, isLoadingUser, mode, postId, user, userPosts}: ProfileType) => {
    const {back} = useRouter()
    const {data: post, isLoading} = useGetUserPostQuery(postId, {skip: !postId})

    const handleCloseModal = () => {
        back()
    }

    return (
        <>
            {isLoading && <Loader />}
            {post && postId && (
                <Modal onClose={handleCloseModal} open showTitle={false}>
                    <ViewUserPost mode={mode} post={post} />
                </Modal>
            )}
            <ProfileWrapper>
                <ProfileHeader isLoadingUser={isLoadingUser} mode={mode} user={user} />
                <ProfilePostsList isLoadingPosts={isLoadingPosts} posts={userPosts} />
            </ProfileWrapper>
        </>
    )
}
