import { Post } from 'entities/Post/Post'
import { PostCardType } from 'entities/UserPosts/api/types'
import { AllPostsListWrapper } from 'widgets/AllPostsList/AllPostsList.styled'

type PostsListType = {
  posts: PostCardType[]
}
export const AllPostsList = ({ posts }: PostsListType): JSX.Element => {
  return (
    <AllPostsListWrapper>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </AllPostsListWrapper>
  )
}
