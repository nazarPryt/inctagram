import { useState } from 'react'

import { useGetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostsStyled } from '@/entities/postsList/ui/Posts/Posts.styled'
import { PostsList } from '@/entities/postsList/ui/PostsList/PostsList'
import { SortDirection } from '@/shared/lib/ApolloClient/Schema.types'
import { InputText } from '@nazar-pryt/inctagram-ui-kit'

export const Posts = () => {
  const { data, loading } = useGetPostsQuery({
    variables: {
      endCursorPostId: null,
      pageSize: 10,
      searchTerm: '',
      sortBy: '',
      sortDirection: SortDirection.Desc,
    },
  })

  return (
    <PostsStyled>
      <InputText search />
      <PostsList loading={loading} posts={data?.getPosts.items} />
    </PostsStyled>
  )
}
