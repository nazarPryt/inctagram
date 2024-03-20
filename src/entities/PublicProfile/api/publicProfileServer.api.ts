import {axiosPublic} from '@/_app/Api/server/axiosPublic'

import {PublicProfileTypes} from './publicProfile.types'

export const getPublicUserProfile = async (profileId: number) => {
    try {
        return await axiosPublic.get<PublicProfileTypes>(`public-user/profile/${profileId}`)
    } catch (e) {
        console.log(e)
    }
}
