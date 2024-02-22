import {axiosPublic} from '@/_app/Api/server/axiosPublic'

import {PublicProfileType} from './public-profile.type'

export const getPublicUserProfile = async (profileId: number) => {
    try {
        return await axiosPublic.get<PublicProfileType>(`public-user/profile/${profileId}`)
    } catch (e) {
        console.log(e)
    }
}
