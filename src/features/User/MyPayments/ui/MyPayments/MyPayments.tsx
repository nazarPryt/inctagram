import {useMyPaymentsQuery} from 'features/User/MyPayments/api'
import {IsEmpty} from 'features/User/MyPayments/ui/IsEmpty'
import {MyPaymentsTable} from 'features/User/MyPayments/ui/MyPaymentsTable'
import {Loader} from 'shared/ui/Loader'

import {MyPaymentsStyled} from './MyPayments.styled'

export const MyPayments = () => {
    const {data: payments, isLoading} = useMyPaymentsQuery()

    if (isLoading) {
        return <Loader />
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
