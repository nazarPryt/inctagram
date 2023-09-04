import React from 'react'
import {ActiveSessionStyled} from 'features/User/Device/ui/ActiveSession/ActiveSession.styled'
import {PcIcon} from 'features/User/Device/ui/icons/PCIcon'
import {MobileIcon} from 'features/User/Device/ui/icons/MobileIcon'
import {NavButton} from 'widgets/Aside/ui/NavButton/NavButton'
import {LogOutIcon} from 'features/Auth/LogOut/ui/icons/LogOutIcon'

type PropsType = {
    deviceType: 'PC' | 'Phone'
    deviceName: string
    IP: string
    lastVisit: string
    handleLogOut: () => void
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
            <NavButton icon={<LogOutIcon />} title={'LogOut'} onClick={props.handleLogOut} />
        </ActiveSessionStyled>
    )
}
