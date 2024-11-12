import {getProfileLayout} from '@/_app/Layouts/authorized/ProfileLayout'
import {Devices} from '@/features/User/Device'

export default function DevicesPage() {
    return <Devices />
}

DevicesPage.getLayout = getProfileLayout
