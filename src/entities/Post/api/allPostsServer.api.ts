import {axiosPublic} from '@/_app/Api/server/axiosPublic'

import {AllPostsType, ParamsType} from './allPosts.types'

export const getAllPublicPosts = async (params: ParamsType) => {
    try {
        return await axiosPublic.get<AllPostsType>(`public-posts/all`, {params})
    } catch (e) {
        console.log(e)
    }
}
