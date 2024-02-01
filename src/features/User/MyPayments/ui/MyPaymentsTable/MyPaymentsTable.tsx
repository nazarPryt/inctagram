import {MyPaymentType} from '@/features/User/MyPayments/api'
import {TableBody, TableCell, TableHead, TableHeadCell, TableRow} from '@nazar-pryt/inctagram-ui-kit'

import {MyPaymentsTableStyled} from './MyPaymentsTable.styled'

type PropsType = {
    payments: MyPaymentType[]
}
export const MyPaymentsTable = (props: PropsType) => {
    return (
        <MyPaymentsTableStyled>
            <TableHead>
                <TableRow>
                    <TableHeadCell>Date of Payment</TableHeadCell>
                    <TableHeadCell>End date of subscription</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Subscription Type</TableHeadCell>
                    <TableHeadCell>Payment Type</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.payments.map(subscription => {
                    return (
                        <TableRow key={subscription.dateOfPayment}>
                            <TableCell>{new Date(subscription.dateOfPayment).toLocaleDateString('ru-RU')}</TableCell>
                            <TableCell>
                                {new Date(subscription.endDateOfSubscription).toLocaleDateString('ru-RU')}
                            </TableCell>
                            <TableCell>{subscription.price}</TableCell>
                            <TableCell>{subscription.subscriptionType}</TableCell>
                            <TableCell>{subscription.paymentType}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </MyPaymentsTableStyled>
    )
}
