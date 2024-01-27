import {NoPostsIcon} from '@/entities/UserPosts/ui/NoPosts/NoPostsIcon'
import {NoPostsWrapper} from '@/entities/UserPosts/ui/NoPosts/icon/NoPosts.styled'

export const NoPosts = () => {
    return (
        <NoPostsWrapper>
            <NoPostsIcon />
            <h1>No Posts Yet</h1>
        </NoPostsWrapper>
    )
}
