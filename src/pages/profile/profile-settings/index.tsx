import {useAppSelector} from 'shared/hooks/reduxHooks'
import {GeneralInformation} from 'features/User/GeneralInformation/ui/GeneralInformation/GeneralInformation'
import {ProfileSettingsAccordion} from 'shared/ui/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {ProfileSettingsWrapper} from 'shared/styles/ProfileSettingsPage'
import {AccountManagement} from 'features/AccountManagement/AccountManagement'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {MyPayments} from 'features/User/MyPayments/ui/MyPayments'
import {Devices} from 'features/User/Device/ui/Devices/Devices'

export default function ProfileSettingsPage() {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)

    return (
        <ProfileSettingsWrapper>
            <ProfileSettingsAccordion />
            {profileSettingActiveTab === 'generalInformation' && <GeneralInformation />}
            {profileSettingActiveTab === 'devices' && <Devices />}
            {profileSettingActiveTab === 'accountManagement' && <AccountManagement />}
            {profileSettingActiveTab === 'myPayments' && <MyPayments />}
        </ProfileSettingsWrapper>
    )
}
ProfileSettingsPage.getLayout = getAuthorizedLayout
