import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

import {DevicesStyled} from '../../Devices.styled'

export const DevicesSkeleton = () => {
    return (
        <DevicesStyled>
            <h1>This device</h1>
            <Skeleton height={130} />

            <div className={'terminateAllSession'}>
                <Skeleton height={30} width={270} />
            </div>

            <h1>Active sessions</h1>
            <div className={'allSessionsBox'}>
                <Skeleton height={130} />
                <Skeleton height={130} />
            </div>
        </DevicesStyled>
    )
}
