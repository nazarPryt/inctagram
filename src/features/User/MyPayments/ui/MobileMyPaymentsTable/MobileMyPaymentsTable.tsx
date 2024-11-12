import {toLocalFormat} from '@/shared/utils/toLocalFormat/toLocalFormat'
import {toTimeAgo} from '@/shared/utils/toTimeAgo'

import {MyPaymentType} from '../../api'
import {MobileMyPaymentsTableStyled} from './MobileMyPaymentsTable.styled'

type PropsType = {
    payments: MyPaymentType[]
}
export const MobileMyPaymentsTable = ({payments}: PropsType) => {
    return (
        <MobileMyPaymentsTableStyled>
            {payments.map(payment => (
                <table key={payment.dateOfPayment}>
                    <thead>
                        <tr>
                            <th>Date of Payment</th>
                            <th>End date of subscription</th>
                            <th>Price</th>
                            <th>Subscription Type</th>
                            <th>Payment Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{toTimeAgo(payment.dateOfPayment)}</td>
                        </tr>
                        <tr>
                            <td>{toLocalFormat(payment.endDateOfSubscription)}</td>
                        </tr>
                        <tr>
                            <td>{payment.price}</td>
                        </tr>
                        <tr>
                            <td>{payment.subscriptionType}</td>
                        </tr>
                        <tr>
                            <td>{payment.paymentType}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            {/*<TableHead>*/}
            {/*    <TableRow>*/}
            {/*        <TableHeadCell>Date of Payment</TableHeadCell>*/}
            {/*        <TableHeadCell>End date of subscription</TableHeadCell>*/}
            {/*        <TableHeadCell>Price</TableHeadCell>*/}
            {/*        <TableHeadCell>Subscription Type</TableHeadCell>*/}
            {/*        <TableHeadCell>Payment Type</TableHeadCell>*/}
            {/*    </TableRow>*/}
            {/*</TableHead>*/}
            {/*<TableBody>*/}
            {/*    {props.payments.map(subscription => {*/}
            {/*        return (*/}
            {/*            <TableRow key={subscription.dateOfPayment}>*/}
            {/*                <TableCell>{toTimeAgo(subscription.dateOfPayment)}</TableCell>*/}
            {/*                <TableCell>*/}
            {/*                    {new Date(subscription.endDateOfSubscription).toLocaleDateString('ru-RU')}*/}
            {/*                </TableCell>*/}
            {/*                <TableCell>{subscription.price}</TableCell>*/}
            {/*                <TableCell>{subscription.subscriptionType}</TableCell>*/}
            {/*                <TableCell>{subscription.paymentType}</TableCell>*/}
            {/*            </TableRow>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</TableBody>*/}
        </MobileMyPaymentsTableStyled>
    )
}
