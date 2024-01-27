import {ProfileWrapper} from '@/widgets/Profile/Profile.styled'
import {ProfileHeader} from '@/widgets/Profile/ui/ProfileHeader/ProfileHeader'
import {ProfilePostsList} from '@/widgets/Profile/ui/ProfilePostsList/ProfilePostsList'

export const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader />
            <ProfilePostsList />
        </ProfileWrapper>
    )
}
