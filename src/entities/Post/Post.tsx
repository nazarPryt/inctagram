import {PostWrapper} from '@/entities/Post/Post.styled'
import {AllPostsTypeItems} from '@/entities/Post/api/all-posts-api.type'
import {PostCommentForm} from '@/entities/Post/ui/PostCommentForm/PostCommentForm'
import {PostComments} from '@/entities/Post/ui/PostComments/PostComments'
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
                userName={post.userName}
            />
            <PostImage images={post.images} />
            <PostFeatures />
            <PostComments />
            <PostLikes />
            <PostCommentForm />
        </PostWrapper>
    )
}
