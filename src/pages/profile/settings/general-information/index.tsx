import {getProfileLayout} from '@/_app/Layouts/authorized/ProfileLayout'
import {GeneralInformation} from '@/features/User/GeneralInformation'

export default function GeneralInformationPage() {
    return <GeneralInformation />
}

GeneralInformationPage.getLayout = getProfileLayout
