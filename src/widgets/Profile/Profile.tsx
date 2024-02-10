import {ProfileWrapper} from './Profile.styled'
import {ProfileHeader} from './ui/ProfileHeader/ProfileHeader'
import {ProfilePostsList} from './ui/ProfilePostsList/ProfilePostsList'

export const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader />
            <ProfilePostsList />
        </ProfileWrapper>
    )
}
