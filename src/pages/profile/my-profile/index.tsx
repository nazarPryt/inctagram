import {getAuthorizedLayout} from '@/shared/layouts/authorized'
import {Profile} from '@/widgets/Profile/Profile'

export default function MyProfilePage() {
    return <Profile />
}
MyProfilePage.getLayout = getAuthorizedLayout
