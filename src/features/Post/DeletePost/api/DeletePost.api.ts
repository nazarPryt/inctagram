import {rtkQuery} from '@/_app/Api/client/RTKQuery'
import {RootState} from '@/_app/Store/store'
import {allPostsApi} from '@/entities/Post/api/allPosts.api'
import {AllPostsType} from '@/entities/Post/helpers/AllPosts.schema'
import {userPostApi} from '@/entities/UserPosts/api/userPosts.api'
import {PostsType} from '@/entities/UserPosts/api/userPosts.types'
import {UserPostsType} from '@/entities/UserPosts/helpers/UserPosts.schema'

export const deleteUserPostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        deletePost: build.mutation<void, number>({
            invalidatesTags: ['UserPosts'],
            async onQueryStarted(postIdToDelete, {dispatch, getState, queryFulfilled}) {
                const state = getState() as RootState
                const allPostsParams = state.params.allPosts
                const userPostsParams = state.params.userPosts

                const userId = state.userAuth.userId
                const endCursorPostId = null

                const patchResult = dispatch(
                    allPostsApi.util.updateQueryData('getAllPosts', allPostsParams, (draft: AllPostsType) => {
                        draft.items = draft.items.filter(post => post.id !== postIdToDelete)
                    })
                )
                const patchResult2 = dispatch(
                    userPostApi.util.updateQueryData('getUserPosts', userId, (draft: UserPostsType) => {
                        draft.items = draft.items.filter(post => post.id !== postIdToDelete)
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                    patchResult2.undo()
                }
            },
            query: postId => ({
                method: 'DELETE',
                url: `posts/${postId}`,
            }),
        }),
    }),
    overrideExisting: true,
})
export const {useDeletePostMutation} = deleteUserPostApi
