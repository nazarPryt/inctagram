import {ProfileHeaderWrapper} from '@/widgets/Profile/ProfileHeader/ProfileHeader.styled'
import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

export const ProfileHeaderSkeleton = () => {
    return (
        <ProfileHeaderWrapper>
            <Skeleton circle height={205} width={205} />
            <div className={'profileData'}>
                <div className={'profileHeader'}>
                    <h2>
                        <Skeleton height={40} width={100} />
                    </h2>
                    <div>
                        <Skeleton height={40} width={100} />
                    </div>
                </div>
                <p>
                    <Skeleton height={50} />
                </p>
            </div>
        </ProfileHeaderWrapper>
    )
}
