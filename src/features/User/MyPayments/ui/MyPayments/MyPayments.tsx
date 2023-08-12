import React from 'react'
import {MyPaymentsStyled} from './MyPayments.styled'
import {MyPaymentsTable} from 'features/User/MyPayments/ui/MyPaymentsTable/MyPaymentsTable'

export const MyPayments = () => {
    return (
        <MyPaymentsStyled>
            <MyPaymentsTable />
        </MyPaymentsStyled>
    )
}
