import {PostsType} from '@/entities/UserPosts/api/types'
import {PublicProfileType} from '@/shared/server-api/server-api.type'

import {PublicProfileStyled} from './PublicProfile.styled'
import {PublicProfileHeader} from './ui/PublicProfileHeader'
import {PublicProfilePostsList} from './ui/PublicProfilePostsList'

type PublicProfilePropsType = {
    user: PublicProfileType
    userPosts: Pick<PostsType, 'items'>
}
export const PublicProfile = ({user, userPosts}: PublicProfilePropsType) => {
    return (
        <PublicProfileStyled>
            <PublicProfileHeader user={user} />
            <PublicProfilePostsList posts={userPosts} />
        </PublicProfileStyled>
    )
}
