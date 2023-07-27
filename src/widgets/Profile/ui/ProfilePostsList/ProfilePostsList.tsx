import React, {useState} from 'react'
import {ProfilePostsListWrapper} from 'widgets/Profile/ui/ProfilePostsList/ProfilePostsList.styled'
import {useGetUserPostsQuery} from 'entities/UserPosts/api/user-posts-api'
import {Loader} from 'shared/components/Loader/Loader'
import {UserPost} from 'entities/UserPosts/ui/UserPost'
import {NoPosts} from 'entities/UserPosts/ui/NoPosts/NoPosts'
import {UserPostsModal} from 'widgets/UserPostsModal/UserPostsModal'
import {UserPostModalContent} from 'entities/UserPostModalContent/UserPostModalContent'

export const ProfilePostsList = ({userId}: {userId: number | null}) => {
    const [open, setOpen] = useState(false)
    const {data: posts, isLoading} = useGetUserPostsQuery(userId as number, {refetchOnMountOrArgChange: true})

    console.log('open', open)
    if (isLoading) {
        return <Loader />
    }
    if (posts && posts.items.length === 0) {
        return <NoPosts />
    }

    return (
        <>
            <UserPostsModal open={open} onClose={setOpen}>
                <UserPostModalContent />
            </UserPostsModal>
            <ProfilePostsListWrapper>
                {posts &&
                    posts.items.map(post => (
                        <UserPost key={post.id} src={post.images[0]?.url} onClick={() => setOpen(true)} />
                    ))}
            </ProfilePostsListWrapper>
        </>
    )
}
