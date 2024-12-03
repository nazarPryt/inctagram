import {rtkQuery} from '@/_app/Api/client/RTKQuery'

import {LikePostType} from './likePosts.types'

export const likePostApi = rtkQuery.injectEndpoints({
    endpoints: build => ({
        LikePost: build.mutation({
            query: ({likeStatus, postId}: LikePostType) => ({
                body: {likeStatus},
                method: 'PUT',
                url: `posts/${postId}/like-status`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useLikePostMutation} = likePostApi
