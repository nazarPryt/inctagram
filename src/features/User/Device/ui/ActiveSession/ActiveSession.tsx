import {LogOutIcon, NavButton} from '@nazar-pryt/inctagram-ui-kit'

import {MobileIcon} from '../icons/MobileIcon'
import {PcIcon} from '../icons/PCIcon'
import {ActiveSessionStyled} from './ActiveSession.styled'

type PropsType = {
    IP: string
    deviceName: string
    deviceType: 'PC' | 'Phone'
    handleLogOut: () => void
    lastVisit: string
}
export const ActiveSession = (props: PropsType) => {
    return (
        <ActiveSessionStyled>
            {props.deviceType === 'PC' ? <PcIcon /> : ''}
            {props.deviceType === 'Phone' ? <MobileIcon /> : ''}
            <div className={'deviceData'}>
                <h2>{props.deviceName}</h2>
                <p>IP: {props.IP}</p>
                <span>Last visit: {props.lastVisit}</span>
            </div>
            <NavButton icon={<LogOutIcon />} onClick={props.handleLogOut} title={'LogOut'} />
        </ActiveSessionStyled>
    )
}
