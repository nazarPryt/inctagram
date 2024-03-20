import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {MyProfile} from '@/features/User/MyProfile'

export default function MyProfilePage() {
    return <MyProfile />
}
MyProfilePage.getLayout = getAuthorizedLayout
