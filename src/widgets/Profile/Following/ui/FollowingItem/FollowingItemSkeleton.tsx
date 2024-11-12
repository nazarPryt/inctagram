import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {FollowingItemStyled} from './FollowingItem.styled'

export const FollowingItemSkeleton = () => {
    return (
        <FollowingItemStyled>
            <div className={'userInfo'}>
                <div>
                    <Skeleton circle height={40} width={40} />
                </div>
                <Skeleton height={20} width={100} />
            </div>
            <div className={'buttonsGroup'}>
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={100} />
            </div>
        </FollowingItemStyled>
    )
}
