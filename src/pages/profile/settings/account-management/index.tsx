import {getProfileLayout} from '@/_app/Layouts/authorized/ProfileLayout'
import {AccountManagement} from '@/features/User/AccountManagement'

export default function AccountManagementPage() {
    return <AccountManagement />
}

AccountManagementPage.getLayout = getProfileLayout
