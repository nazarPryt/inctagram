import {NoPostsWrapper} from './NoPosts.styled'
import {NoPostsIcon} from './icon/NoPostsIcon'

export const NoPosts = () => {
    return (
        <NoPostsWrapper>
            <NoPostsIcon />
            <h1>No Posts Yet</h1>
        </NoPostsWrapper>
    )
}
