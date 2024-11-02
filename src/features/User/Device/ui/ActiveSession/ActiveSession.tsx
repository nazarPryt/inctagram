import {LogOutIcon, NavButton} from '@nazar-pryt/inctagram-ui-kit'

import {MobileIcon} from '../icons/MobileIcon'
import {PcIcon} from '../icons/PCIcon'
import {ActiveSessionStyled} from './ActiveSession.styled'

type PropsType = {
    IP: string
    browserName: string
    deviceId: number
    deviceName: string
    deviceType: string | undefined
    disabled: boolean
    handleLogOut: (deviceId: number) => void
    lastVisit: string
}
export const ActiveSession = ({deviceType = 'PC', ...rest}: PropsType) => {
    const handleLogOutSession = () => {
        rest.handleLogOut(rest.deviceId)
    }

    return (
        <ActiveSessionStyled>
            {deviceType === 'PC' ? <PcIcon /> : ''}
            {deviceType === 'mobile' ? <MobileIcon /> : ''}
            <div className={'deviceData'}>
                <h2>{rest.deviceName}</h2>
                <p>Browser: {rest.browserName}</p>
                <p>IP: {rest.IP}</p>
                <span>Last visit: {new Date(rest.lastVisit).toLocaleDateString('ru-RU')}</span>
            </div>
            <NavButton disabled={rest.disabled} icon={<LogOutIcon />} onClick={handleLogOutSession} title={'LogOut'} />
        </ActiveSessionStyled>
    )
}
