import {MobileMyPaymentsTable} from '@/features/User/MyPayments/ui/MobileMyPaymentsTable'
import {useScreenDetector} from '@/shared/hooks/useScreenDetector'
import {IsEmpty} from '@/shared/ui/IsEmpty'
import {TableSkeleton} from '@nazar-pryt/inctagram-ui-kit'

import {MyPaymentsStyled} from './MyPayments.styled'
import {useMyPaymentsQuery} from './api'
import {MyPaymentsTable} from './ui/MyPaymentsTable'

export const MyPayments = () => {
    const {isMobile} = useScreenDetector()
    const {data: payments, isLoading} = useMyPaymentsQuery()

    if (isLoading) {
        return <>{isMobile ? <TableSkeleton columns={1} rows={5} /> : <TableSkeleton columns={5} rows={10} />}</>
    }

    if (!payments) {
        return <IsEmpty text={'You do not have any payment yet'} />
    }

    return (
        <MyPaymentsStyled>
            {isMobile && <MobileMyPaymentsTable payments={payments} />}
            {!isMobile && <MyPaymentsTable payments={payments} />}
        </MyPaymentsStyled>
    )
}
