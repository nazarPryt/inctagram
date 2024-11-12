import {PublicProfileType} from '@/entities/Profile/PublicProfile/helpers/publicProfile.schema'
import {PostsType} from '@/entities/UserPosts/api/userPosts.types'
import {UserPostItemType, UserPostsType} from '@/entities/UserPosts/helpers/UserPosts.schema'
import {ViewUserPost} from '@/entities/ViewUserPost'
import {useGetUserPostQuery} from '@/entities/ViewUserPost/api/getPost.api'
import {ComponentMode} from '@/shared/hooks/useMode'
import {Loader, Modal} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

import {ProfileWrapper} from './Profile.styled'
import {ProfileHeader} from './ProfileHeader'
import {ProfilePostsList} from './ProfilePostsList'

type ProfileType = {
    isLoadingPosts?: boolean
    isLoadingUser?: boolean
    mode: ComponentMode
    postId: null | number
    serverSidePosts?: UserPostItemType[]
    user: PublicProfileType
    userPosts?: any
}
export const Profile = ({isLoadingUser, mode, postId, serverSidePosts, user}: ProfileType) => {
    const {back} = useRouter()
    const {data: post, isLoading} = useGetUserPostQuery(postId, {skip: !postId})

    const handleCloseViewUserPost = () => {
        back()
    }

    const showPostModal = Boolean(post && postId)

    return (
        <>
            {isLoading && <Loader fullScreen />}

            <Modal onClose={handleCloseViewUserPost} open={showPostModal} showTitle={false} size={'full'}>
                {post && <ViewUserPost post={post} />}
            </Modal>

            <ProfileWrapper>
                <ProfileHeader isLoadingUser={isLoadingUser} mode={mode} user={user} />
                <ProfilePostsList serverSidePosts={serverSidePosts} userId={user.id} />
            </ProfileWrapper>
        </>
    )
}
