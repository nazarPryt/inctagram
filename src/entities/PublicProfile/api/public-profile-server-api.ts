import {publicAPI} from '@/shared/server-api/server-api'

import {PublicProfileType} from './public-profile.type'

export const getPublicUserProfile = async (profileId: number) => {
    try {
        return await publicAPI.get<PublicProfileType>(`public-user/profile/${profileId}`)
    } catch (e) {
        console.log(e)
    }
}
