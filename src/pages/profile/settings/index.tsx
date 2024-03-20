import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {AccountManagement} from '@/features/User/AccountManagement'
import {Devices} from '@/features/User/Device/Devices'
import {GeneralInformation} from '@/features/User/GeneralInformation'
import {MyPayments} from '@/features/User/MyPayments'
import {TabContent, Tabs} from '@nazar-pryt/inctagram-ui-kit'

export default function ProfileSettingsPage() {
    return (
        <Tabs
            defaultValue={'generalInformation'}
            fullWidth
            tabs={[
                {
                    title: 'General Information',
                    value: 'generalInformation',
                },
                {
                    title: 'Devices',
                    value: 'devices',
                },
                {
                    title: 'Account Management',
                    value: 'accountManagement',
                },
                {
                    title: 'My Payments',
                    value: 'myPayments',
                },
            ]}
        >
            <TabContent value={'generalInformation'}>
                <GeneralInformation />
            </TabContent>
            <TabContent value={'devices'}>
                <Devices />
            </TabContent>
            <TabContent value={'accountManagement'}>
                <AccountManagement />
            </TabContent>
            <TabContent value={'myPayments'}>
                <MyPayments />
            </TabContent>
        </Tabs>
    )
}
ProfileSettingsPage.getLayout = getAuthorizedLayout
