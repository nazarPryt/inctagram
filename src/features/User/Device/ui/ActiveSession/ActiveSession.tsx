import {LogOutIcon, NavButton} from '@nazar-pryt/inctagram-ui-kit'

import {MobileIcon} from '../icons/MobileIcon'
import {PcIcon} from '../icons/PCIcon'
import {ActiveSessionStyled} from './ActiveSession.styled'

type PropsType = {
    IP: string
    browserName: string
    deviceId: number
    deviceName: string
    deviceType: 'PC' | 'Phone'
    disabled: boolean
    handleLogOut: (deviceId: number) => void
    lastVisit: string
}
export const ActiveSession = (props: PropsType) => {
    const handleLogOutSession = () => {
        props.handleLogOut(props.deviceId)
    }

    return (
        <ActiveSessionStyled>
            {props.deviceType === 'PC' ? <PcIcon /> : ''}
            {props.deviceType === 'Phone' ? <MobileIcon /> : ''}
            <div className={'deviceData'}>
                <h2>{props.deviceName}</h2>
                <p>Browser: {props.browserName}</p>
                <p>IP: {props.IP}</p>
                <span>Last visit: {new Date(props.lastVisit).toLocaleDateString('ru-RU')}</span>
            </div>
            <NavButton disabled={props.disabled} icon={<LogOutIcon />} onClick={handleLogOutSession} title={'LogOut'} />
        </ActiveSessionStyled>
    )
}
