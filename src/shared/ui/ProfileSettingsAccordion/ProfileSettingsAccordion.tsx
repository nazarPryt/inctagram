import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { TabButton } from '../TabButton/TabButton'

import { setProfileSettingsTabsAC, TabsSettingsType } from '_app/store/appSlice'
import { useTranslation } from 'shared/hooks/useTranslation'
import { ProfileSettingsAccordionStyled } from 'shared/ui/ProfileSettingsAccordion/ProfileSettingsAccordion.styled'

type TabNamesType = {
  name: TabsSettingsType
  labelName: string
}
export const ProfileSettingsAccordion = (): JSX.Element => {
  const { t } = useTranslation()
  const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)
  const dispatch = useAppDispatch()

  const tabNames: TabNamesType[] = [
    { name: 'generalInformation', labelName: t.generalInfo.tabs.generalInfo },
    { name: 'devices', labelName: t.generalInfo.tabs.devices },
    { name: 'accountManagement', labelName: t.generalInfo.tabs.accountManagement },
    { name: 'myPayments', labelName: t.generalInfo.tabs.myPayments },
  ]

  const setAccordionHandler = (tab: TabsSettingsType): void => {
    dispatch(setProfileSettingsTabsAC({ tab }))
  }

  return (
    <ProfileSettingsAccordionStyled>
      {tabNames.map(tabName => (
        <TabButton
          key={tabName.name}
          $active={profileSettingActiveTab === tabName.name}
          onClick={() => setAccordionHandler(`${tabName.name}`)}
        >
          {tabName.labelName}
        </TabButton>
      ))}
    </ProfileSettingsAccordionStyled>
  )
}
