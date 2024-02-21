import {TableSkeleton} from '@nazar-pryt/inctagram-ui-kit'

import {MyPaymentsStyled} from './MyPayments.styled'
import {useMyPaymentsQuery} from './api'
import {IsEmpty} from './ui/IsEmpty'
import {MyPaymentsTable} from './ui/MyPaymentsTable'

export const MyPayments = () => {
    const {data: payments, isLoading} = useMyPaymentsQuery()

    if (isLoading) {
        return <TableSkeleton columns={5} rows={10} />
    }
    if (payments && payments.length !== 0) {
        return (
            <MyPaymentsStyled>
                <MyPaymentsTable payments={payments} />
            </MyPaymentsStyled>
        )
    }

    return <IsEmpty />
}
