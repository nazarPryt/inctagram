import {Post} from '@/entities/Post/Post'
import {useGetAllPostsQuery} from '@/entities/Post/api/all-posts-api'

import {AllPostsListWrapper} from './AllPostsList.styled'
import {AllPostsListSkeleton} from './AllPostsListSkeleton'

export const AllPostsList = () => {
    const {data, isLoading} = useGetAllPostsQuery(null)

    if (isLoading) {
        return <AllPostsListSkeleton />
    }

    return (
        <AllPostsListWrapper>
            {data && data.items.map((post, index) => <Post key={index} post={post} />)}
        </AllPostsListWrapper>
    )
}
