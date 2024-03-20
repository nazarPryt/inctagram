import {PostWrapper} from '@/entities/Post/Post.styled'
import {AllPostsTypeItems} from '@/entities/Post/api/allPosts.types'
import {PostCommentForm} from '@/entities/Post/ui/PostCommentForm/PostCommentForm'
import {PostComments} from '@/entities/Post/ui/PostComments/PostComments'
import {PostDescription} from '@/entities/Post/ui/PostDescription/PostDescription'
import {PostFeatures} from '@/entities/Post/ui/PostFeatures/PostFeatures'
import {PostHeader} from '@/entities/Post/ui/PostHeader/PostHeader'
import {PostImage} from '@/entities/Post/ui/PostImage/PostImage'
import {PostLikes} from '@/entities/Post/ui/PostLikes/PostLikes'

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
