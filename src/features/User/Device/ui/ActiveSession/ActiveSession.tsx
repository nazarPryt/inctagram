import { LogOutIcon } from 'features/Auth/LogOut/ui/icons/LogOutIcon'
import { ActiveSessionStyled } from 'features/User/Device/ui/ActiveSession/ActiveSession.styled'
import { MobileIcon } from 'features/User/Device/ui/icons/MobileIcon'
import { PcIcon } from 'features/User/Device/ui/icons/PCIcon'
import { NavButton } from 'widgets/Aside/ui/NavButton/NavButton'

type PropsType = {
  deviceType: 'PC' | 'Phone'
  deviceName: string
  IP: string
  lastVisit: string
  handleLogOut: () => void
}
export const ActiveSession = ({ IP, lastVisit, handleLogOut, deviceType, deviceName }: PropsType): JSX.Element => {
  return (
    <ActiveSessionStyled>
      {deviceType === 'PC' ? <PcIcon /> : ''}
      {deviceType === 'Phone' ? <MobileIcon /> : ''}
      <div className="deviceData">
        <h2>{deviceName}</h2>
        <p>IP: {IP}</p>
        <span>Last visit: {lastVisit}</span>
      </div>
      <NavButton icon={<LogOutIcon />} title="LogOut" onClick={handleLogOut} />
    </ActiveSessionStyled>
  )
}
