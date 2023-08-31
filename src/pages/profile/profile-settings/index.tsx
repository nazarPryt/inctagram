import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'
import { AccountManagement } from 'features/AccountManagement/AccountManagement'
import { Devices } from 'features/User/Device/ui/Devices/Devices'
import { GeneralInformation } from 'features/User/GeneralInformation/ui/GeneralInformation/GeneralInformation'
import { MyPayments } from 'features/User/MyPayments/ui/MyPayments'
import { useAppSelector } from 'shared/hooks/reduxHooks'
import { ProfileSettingsWrapper } from 'shared/styles/ProfileSettingsPage'
import { ProfileSettingsAccordion } from 'shared/ui/ProfileSettingsAccordion/ProfileSettingsAccordion'

type ProfileSettingsPageProps = {
  userId: number | null
}

export const getServerSideProps: GetServerSideProps<ProfileSettingsPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context)

  // TODO
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (session && session.user.userId) {
    return {
      props: {
        // TODO
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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

export default function ProfileSettingsPage(): JSX.Element {
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
