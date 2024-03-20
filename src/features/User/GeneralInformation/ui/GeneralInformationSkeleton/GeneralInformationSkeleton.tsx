import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {GeneralInformationSkeletonStyled} from './GeneralInformationSkeleton.styled'

export const GeneralInformationSkeleton = () => {
    return (
        <GeneralInformationSkeletonStyled>
            <div className={'avatarBox'}>
                <Skeleton circle height={192} width={192} />
                <Skeleton height={60} />
            </div>
            <div className={'form'}>
                <div>
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                </div>
            </div>
        </GeneralInformationSkeletonStyled>
    )
}
