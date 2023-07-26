import React from 'react'

import {useAppSelector} from 'shared/hooks/reduxHooks'
import {GeneralInformation} from 'common/components/GeneralInformation/GeneralInformation'
import {MyPayments} from 'shared/components/MyPayments/MyPayments'
import {ProfileSettingsAccordion} from 'shared/components/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {Devices} from 'shared/components/Devices/Devices'
import {ProfileSettingsWrapper} from 'shared/styles/ProfileSettingsPage'
import {AccountManagement} from 'shared/components/AccountManagement/AccountManagement'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import {getSession} from 'next-auth/react'

type ProfileSettingsPageProps = {
    userId: number | null
}

export const getServerSideProps: GetServerSideProps<ProfileSettingsPageProps> = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context)

    if (session && session.user.userId) {
        return {
            props: {
                userId: session.user.userId,
            },
        }
    }
    return {
        props: {
            userId: null,
        },
    }
}

export default function ProfileSettingsPage({userId}: ProfileSettingsPageProps) {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)

    return (
        <ProfileSettingsWrapper>
            <ProfileSettingsAccordion />
            <div>
                {profileSettingActiveTab === 'generalInformation' && <GeneralInformation userId={userId} />}
                {profileSettingActiveTab === 'devices' && <Devices />}
                {profileSettingActiveTab === 'accountManagement' && <AccountManagement />}
                {profileSettingActiveTab === 'myPayments' && <MyPayments />}
            </div>
        </ProfileSettingsWrapper>
    )
}
ProfileSettingsPage.getLayout = getAuthorizedLayout
