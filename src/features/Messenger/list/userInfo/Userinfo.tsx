import {UserInfoStyled} from '@/features/Messenger/list/userInfo/userInfo.styled'

import './userInfo.styled'

export const Userinfo = () => {
    return (
        <UserInfoStyled>
            <div className={'user'}>
                <img alt={''} src={'https://loremflickr.com/48/48'} />
                <h2>{'currentUser.username'}</h2>
            </div>
            <div className={'icons'}>
                <img alt={''} src={'./more.png'} />
                <img alt={''} src={'./video.png'} />
                <img alt={''} src={'./edit.png'} />
            </div>
        </UserInfoStyled>
    )
}
