import {IsEmpty} from '@/shared/ui/IsEmpty'
import {TableSkeleton} from '@nazar-pryt/inctagram-ui-kit'

import {MyPaymentsStyled} from './MyPayments.styled'
import {useMyPaymentsQuery} from './api'
import {MyPaymentsTable} from './ui/MyPaymentsTable'

export const MyPayments = () => {
    const {data: payments, isLoading} = useMyPaymentsQuery()

    if (isLoading) {
        return <TableSkeleton columns={5} rows={10} />
    }
    if (!payments) {
        return <IsEmpty text={'You do not have any payment yet'} />
    }

    return (
        <MyPaymentsStyled>
            <MyPaymentsTable payments={payments} />
        </MyPaymentsStyled>
    )
}
