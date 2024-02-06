import {useTranslation} from '@/shared/hooks/useTranslation'
import {PublicProfileType} from '@/shared/server-api/server-api.type'
import {Avatar} from '@nazar-pryt/inctagram-ui-kit'

import {PublicProfileHeaderStyled} from './PublicProfileHeader.styled'

export const PublicProfileHeader = ({user}: {user: PublicProfileType}) => {
    const {t} = useTranslation()

    return (
        <PublicProfileHeaderStyled>
            <div>
                <Avatar size={205} src={user.avatars[1]?.url} userName={user.userName} />
            </div>
            <div className={'profileData'}>
                <div className={'profileHeader'}>
                    <h2>{user.userName}</h2>
                </div>
                <div className={'profileStatistics'}>
                    <div>
                        <span>2 218</span>
                        {t.profile.following}
                    </div>
                    <div>
                        <span>2 358</span>
                        {t.profile.followers}
                    </div>
                    <div>
                        <span>2 764</span>
                        {t.profile.publications}
                    </div>
                </div>
                <p>{user.aboutMe}</p>
            </div>
        </PublicProfileHeaderStyled>
    )
}
