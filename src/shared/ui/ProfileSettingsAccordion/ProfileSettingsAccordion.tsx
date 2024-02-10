import {useTranslation} from '@/shared/hooks/useTranslation'
import {TabsSettingsType, setProfileSettingsTabsAC} from '@/shared/store/appSlice'
import {ProfileSettingsAccordionStyled} from '@/shared/ui/ProfileSettingsAccordion/ProfileSettingsAccordion.styled'

import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks'
import {TabButton} from '../TabButton/TabButton'

type TabNamesType = {
    labelName: string
    name: TabsSettingsType
}
export const ProfileSettingsAccordion = () => {
    const {t} = useTranslation()
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)
    const dispatch = useAppDispatch()

    const tabNames: TabNamesType[] = [
        {labelName: t.generalInfo.tabs.generalInfo, name: 'generalInformation'},
        {labelName: t.generalInfo.tabs.devices, name: 'devices'},
        {labelName: t.generalInfo.tabs.accountManagement, name: 'accountManagement'},
        {labelName: t.generalInfo.tabs.myPayments, name: 'myPayments'},
    ]

    const setAccordionHandler = (tab: TabsSettingsType) => {
        dispatch(setProfileSettingsTabsAC({tab}))
    }

    return (
        <ProfileSettingsAccordionStyled>
            {tabNames.map(tabName => (
                <TabButton
                    $active={profileSettingActiveTab === tabName.name}
                    key={tabName.name}
                    onClick={() => setAccordionHandler(`${tabName.name}`)}
                >
                    {tabName.labelName}
                </TabButton>
            ))}
        </ProfileSettingsAccordionStyled>
    )
}
