import {useGetPublicProfileQuery} from '../api/publicProfile.api'

export const useGetPublicProfile = (id: null | number) => {
    const {data} = useGetPublicProfileQuery(id, {
        refetchOnMountOrArgChange: true,
        skip: !id,
    })
    const avatarUrl = data && data.avatars.length ? data.avatars[0].url : ''
    const userName = data && data.userName
    const aboutMe = data && data.aboutMe

    return {
        aboutMe,
        avatarUrl,
        userName,
    }
}
