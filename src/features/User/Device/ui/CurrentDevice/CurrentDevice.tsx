import {OperaIcon} from '@/features/User/Device/ui/icons/OperaIcon'

import {DeviceType} from '../../api/devices.types'
import {ChromeIcon} from '../icons/ChromeIcon'
import {MozillaIcon} from '../icons/MozillaIcon'
import {SafariIcon} from '../icons/SafariIcon'
import {CurrentDeviceStyled} from './CurrentDevice.styled'

type PropsType = {
    online: boolean
} & Partial<DeviceType>

export const CurrentDevice = ({
    browserName,
    browserVersion,
    deviceId,
    ip,
    lastActive,
    online,
    osName,
    osVersion,
}: PropsType) => {
    return (
        <CurrentDeviceStyled>
            <div className={'deviceIcon'}>
                {browserName === 'Chrome' ? <ChromeIcon /> : ''}
                {browserName === 'Safari' ? <SafariIcon /> : ''}
                {browserName === 'Mozilla' ? <MozillaIcon /> : ''}
                {browserName === 'Opera' ? <OperaIcon /> : ''}
            </div>

            <div className={'deviceData'}>
                <h2>
                    {browserName} {browserVersion}
                </h2>
                <p>
                    OsName: {osName} {osVersion}
                </p>
                <p>IP: {ip}</p>
                {online ? <span className={'isOnline'}>Online</span> : <span className={'isOffline'}>Offline</span>}
            </div>
        </CurrentDeviceStyled>
    )
}
