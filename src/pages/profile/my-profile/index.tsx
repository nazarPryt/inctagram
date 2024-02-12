import {MyProfile} from '@/features/User/MyProfile/MyProfile'
import {getAuthorizedLayout} from '@/shared/layouts/authorized'

export default function MyProfilePage() {
    return <MyProfile />
}
MyProfilePage.getLayout = getAuthorizedLayout
