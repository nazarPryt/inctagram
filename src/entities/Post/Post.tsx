import {PostWrapper} from './Post.styled'
import {AllPostsTypeItems} from './api/allPosts.types'
import {PostCommentForm} from './ui/PostCommentForm'
import {PostComments} from './ui/PostComments'
import {PostDescription} from './ui/PostDescription'
import {PostFeatures} from './ui/PostFeatures'
import {PostHeader} from './ui/PostHeader'
import {PostImage} from './ui/PostImage'
import {PostLikes} from './ui/PostLikes'

type PostType = {
    post: AllPostsTypeItems
}

export const Post = ({post}: PostType) => {
    return (
        <PostWrapper>
            <PostHeader
                avatarOwner={post.avatarOwner}
                createdAt={post.createdAt}
                owner={post.owner}
                ownerId={post.ownerId}
                postId={post.id}
                userName={post.userName}
            />
            <PostImage images={post.images} />
            <PostFeatures />
            <PostDescription
                avatarOwner={post.avatarOwner}
                description={post.description}
                ownerId={post.ownerId}
                userName={post.userName}
            />
            {/*<PostComments />*/}
            <PostLikes />
            <PostCommentForm />
        </PostWrapper>
    )
}
