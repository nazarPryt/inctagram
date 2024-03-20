import {ReactNode} from 'react'

import {useAppSelector} from '@/shared/hooks/reduxHooks'

export type ComponentMode = 'fellow' | 'myProfile' | 'publick'

export type ModeItems = {
    [key in ComponentMode]: ReactNode
}
/**
 *      fellow - if we are logged in, but looking on other people profile
 *      myProfile - our profile
 *      publick -> we are not loggedIn, for unregistered users
 * */

export const useMode = (profileId: number) => {
    const userId = useAppSelector(state => state.userAuth.userId)
    let mode: ComponentMode = 'publick'

    if (userId === profileId) {
        mode = 'myProfile'
    } else if (userId && userId !== profileId) {
        mode = 'fellow'
    }

    return {
        mode,
    }
}
