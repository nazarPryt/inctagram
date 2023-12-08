import {MyPaymentsStyled} from './MyPayments.styled'
import {Loader} from 'shared/ui/Loader'
import {IsEmpty} from 'features/User/MyPayments/ui/IsEmpty'
import {useMyPaymentsQuery} from 'features/User/MyPayments/api'
import {MyPaymentsTable} from 'features/User/MyPayments/ui/MyPaymentsTable'

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
