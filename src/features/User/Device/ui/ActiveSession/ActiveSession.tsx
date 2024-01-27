import {LogOutIcon} from '@/features/Auth/LogOut/ui/icons/LogOutIcon'
import {ActiveSessionStyled} from '@/features/User/Device/ui/ActiveSession/ActiveSession.styled'
import {MobileIcon} from '@/features/User/Device/ui/icons/MobileIcon'
import {PcIcon} from '@/features/User/Device/ui/icons/PCIcon'
import {NavButton} from '@/widgets/Aside/ui/NavButton/NavButton'

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
