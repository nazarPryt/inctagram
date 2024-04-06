import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {SearchUserItemStyled} from '../SearchUserItem/SearchUserItem.styled'

export const SearchUserSkeleton = () => {
    return (
        <SearchUserItemStyled>
            <div className={'avatarBox'}>
                <Skeleton circle height={48} width={48} />
            </div>
            <div className={'rightBox'}>
                <Skeleton height={20} width={200} />
                <Skeleton height={20} width={150} />
            </div>
        </SearchUserItemStyled>
    )
}
