import { MyPaymentsTableStyled } from './MyPaymentsTable.styled'

import { MyPaymentType } from 'features/User/MyPayments/api'
import { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'shared/ui/Table'

type PropsType = {
  payments: MyPaymentType[]
}
export const MyPaymentsTable = ({ payments }: PropsType): JSX.Element => {
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
        {payments.map(subscription => {
          return (
            <TableRow key={subscription.subscriptionId}>
              <TableCell>{subscription.dateOfPayment}</TableCell>
              <TableCell>{subscription.endDateOfSubscription}</TableCell>
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
