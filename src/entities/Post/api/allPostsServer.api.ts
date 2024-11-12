import {axiosPublic} from '@/_app/Api/server/axiosPublic'
import {AllPostsParamsType} from '@/_app/Store/slicesTypes/paramsSliceType'
import {AllPostsType} from '@/entities/Post/helpers/AllPosts.schema'

export const getAllPublicPosts = async () => {
    try {
        const params: AllPostsParamsType = {pageSize: 4, sortDirection: 'desc'}

        return await axiosPublic.get<AllPostsType>(`public-posts/all`, {params})
    } catch (e) {
        console.log(e)
    }
}
