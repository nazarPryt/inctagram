import {ProfileHeaderWrapper} from '@/widgets/Profile/ui/ProfileHeader/ProfileHeader.styled'
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
                <div className={'profileStatistics'}>
                    <div>
                        <span>
                            <Skeleton height={20} width={50} />
                        </span>
                        <Skeleton height={20} width={90} />
                    </div>
                    <div>
                        <span>
                            <Skeleton height={20} width={50} />
                        </span>
                        <Skeleton height={20} width={90} />
                    </div>
                    <div>
                        <span>
                            <Skeleton height={20} width={50} />
                        </span>
                        <Skeleton height={20} width={90} />
                    </div>
                </div>
                <p>
                    <Skeleton height={50} />
                </p>
            </div>
        </ProfileHeaderWrapper>
    )
}
