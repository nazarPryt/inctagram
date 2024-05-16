import {ProfileHeaderWrapper} from '@/widgets/Profile/ProfileHeader/ProfileHeader.styled'
import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

export const ProfileStatisticsSkeleton = () => {
    return (
        <ProfileHeaderWrapper>
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
        </ProfileHeaderWrapper>
    )
}
