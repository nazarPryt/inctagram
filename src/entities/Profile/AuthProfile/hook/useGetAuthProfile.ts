import {useGetAuthProfileQuery} from '../api/authProfile.api'

export const useGetAuthProfile = (userName: string | undefined) => {
    const {data} = useGetAuthProfileQuery(userName, {
        skip: !userName,
    })
    const avatarUrl = data && data.avatars.length ? data.avatars[0].url : ''
    // const userName = data && data.userName
    const aboutMe = data && data.aboutMe

    return {
        avatarUrl,
        data,
        userName,
    }
}
