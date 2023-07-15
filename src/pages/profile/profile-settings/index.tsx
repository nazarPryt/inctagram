import React from 'react'

import {useAppSelector} from 'shared/hooks/reduxHooks'

import {GeneralInformation} from 'common/components/GeneralInformation/GeneralInformation'
import {MyPayments} from 'shared/components/MyPayments/MyPayments'
import {ProfileSettingsAccordion} from 'shared/components/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {Devices} from 'shared/components/Devices/Devices'
import {ProfileSettingsWrapper} from 'shared/styles/ProfileSettingsPage'
import {AccountManagement} from 'shared/components/AccountManagement/AccountManagement'
import {getAuthorizedLayout} from '../../../_app/Layouts/authorized/AuthorizedLayout'

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
