import React from 'react'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import {GeneralInformation} from 'features/GeneralInformation/GeneralInformation'
import {ProfileSettingsAccordion} from 'shared/ui/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {Devices} from 'shared/ui/Devices/Devices'
import {ProfileSettingsWrapper} from 'shared/styles/ProfileSettingsPage'
import {AccountManagement} from 'features/AccountManagement/AccountManagement'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {MyPayments} from 'features/User/MyPayments/ui/MyPayments'

export default function ProfileSettingsPage() {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)

    return (
        <ProfileSettingsWrapper>
            <ProfileSettingsAccordion />
            <div>
                {profileSettingActiveTab === 'generalInformation' && <GeneralInformation />}
                {profileSettingActiveTab === 'devices' && <Devices />}
                {profileSettingActiveTab === 'accountManagement' && <AccountManagement />}
                {profileSettingActiveTab === 'myPayments' && <MyPayments />}
            </div>
        </ProfileSettingsWrapper>
    )
}
ProfileSettingsPage.getLayout = getAuthorizedLayout
