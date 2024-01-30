import {useMyPaymentsQuery} from '@/features/User/MyPayments/api'
import {IsEmpty} from '@/features/User/MyPayments/ui/IsEmpty'
import {MyPaymentsTable} from '@/features/User/MyPayments/ui/MyPaymentsTable'
import {TableSkeleton} from '@nazar-pryt/inctagram-ui-kit'

import {MyPaymentsStyled} from './MyPayments.styled'

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
