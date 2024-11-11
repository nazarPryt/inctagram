import {getProfileLayout} from '@/_app/Layouts/authorized/ProfileLayout'
import {MyPayments} from '@/features/User/MyPayments'

export default function MyPaymentsPage() {
    return <MyPayments />
}

MyPaymentsPage.getLayout = getProfileLayout
