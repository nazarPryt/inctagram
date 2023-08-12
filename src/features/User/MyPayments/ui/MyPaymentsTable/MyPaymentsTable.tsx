import React from 'react'
import {MyPaymentsTableStyled} from 'features/User/MyPayments/ui/MyPaymentsTable/MyPaymentsTable.styled'
import {TableBody, TableCell, TableHead, TableHeadCell, TableRow} from 'shared/ui/Table'

export const MyPaymentsTable = () => {
    return (
        <MyPaymentsTableStyled>
            <TableHead>
                <TableHeadCell>Date of Payment</TableHeadCell>
                <TableHeadCell>End date of subscription</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>Subscription Type</TableHeadCell>
                <TableHeadCell>Payment Type</TableHeadCell>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>'12.12.2022'</TableCell>
                    <TableCell>'12.12.2022'</TableCell>
                    <TableCell>$100</TableCell>
                    <TableCell>7 days</TableCell>
                    <TableCell>Stripe</TableCell>
                </TableRow>
            </TableBody>
        </MyPaymentsTableStyled>
    )
}
