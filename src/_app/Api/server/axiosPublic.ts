import {appSettings} from '@/_app/AppSettings'
import {PublicProfileType} from '@/entities/PublicProfile/api/public-profile.type'
import {PostsType} from '@/entities/UserPosts/api/types'
import axios from 'axios'

const baseURL = appSettings.BASE_URL

export const axiosPublic = axios.create({
    baseURL,
    withCredentials: true,
})

export const serverPublicAPI = {
    async getAllUsersCount() {
        try {
            const res = await axiosPublic.get<{totalCount: number}>(`public-user`)

            return res.data.totalCount
        } catch (e) {
            console.log(e)
        }
    },
    async getPublicUserProfile(profileId: number) {
        try {
            return await axiosPublic.get<PublicProfileType>(`public-user/profile/${profileId}`)
        } catch (e) {
            console.log(e)
        }
    },
    async getUserPosts(profileId: number) {
        try {
            return await axiosPublic.get<PostsType>(`public-posts/user/${profileId}`)
        } catch (e) {
            console.log(e)
        }
    },
}
