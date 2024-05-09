import {ComponentMode} from '@/shared/hooks/useMode'

import {useGetAuthProfileQuery} from '../api/authProfile.api'

type PropsType = {
    mode: ComponentMode
    userName: string | undefined
}
export const useGetAuthProfile = ({mode, userName}: PropsType) => {
    const {data: authProfile} = useGetAuthProfileQuery(userName, {
        skip: !userName || mode === 'publick',
    })
    const avatarUrl = authProfile && authProfile.avatars.length ? authProfile.avatars[0].url : ''
    // const userName = data && data.userName
    const aboutMe = authProfile && authProfile.aboutMe

    return {
        authProfile,
        avatarUrl,
        userName,
    }
}
