import {AllPostsType, ParamsType} from '@/entities/Post/api/all-posts-api.type'
import {publicAPI} from '@/shared/server-api/server-api'

export const getAllPublicPosts = async (params: ParamsType) => {
    try {
        return await publicAPI.get<AllPostsType>(`public-posts/all`, {params})
    } catch (e) {
        console.log(e)
    }
}
