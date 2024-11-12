import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {ProfilePostsListWrapper} from './ProfilePostsList.styled'

export const ProfilePostsListSkeleton = () => {
    return (
        <ProfilePostsListWrapper>
            <Skeleton containerClassName={'skeletonWrapper'} count={12} height={235} width={200} />
        </ProfilePostsListWrapper>
    )
}
