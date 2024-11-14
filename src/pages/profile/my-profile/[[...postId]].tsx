import {getAuthorizedLayout} from '@/_app/Layouts/authorized'

import {MyProfile} from '../../../widgets/Profile/MyProfile'

export default function MyProfilePage() {
    return <MyProfile />
}
MyProfilePage.getLayout = getAuthorizedLayout
