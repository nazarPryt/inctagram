import React from 'react'
import {MyPaymentsStyled} from './MyPayments.styled'
import {MyPaymentsTable} from 'features/User/MyPayments/ui/MyPaymentsTable/MyPaymentsTable'
import {useMyPaymentsQuery} from 'features/User/MyPayments/api/myPayments.api'
import {Loader} from 'shared/ui/Loader'
import {IsEmpty} from 'features/User/MyPayments/ui/IsEmpty/IsEmpty'

export const MyPayments = () => {
    const {data, isLoading} = useMyPaymentsQuery()

    if (isLoading) {
        return <Loader />
    }
    return <MyPaymentsStyled>{data && data.length === 0 ? <IsEmpty /> : <MyPaymentsTable />}</MyPaymentsStyled>
}
