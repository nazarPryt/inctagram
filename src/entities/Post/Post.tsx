import {PostWrapper} from './Post.styled'
import {AllPostsItemType} from './helpers/AllPosts.schema'
import {PostCommentForm} from './ui/PostCommentForm'
import {PostDescription} from './ui/PostDescription'
import {PostFeatures} from './ui/PostFeatures'
import {PostHeader} from './ui/PostHeader'
import {PostImage} from './ui/PostImage'
import {PostLikes} from './ui/PostLikes'

type PostType = {
    post: AllPostsItemType
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
