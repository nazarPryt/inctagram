import {CurrentDeviceStyled} from 'features/User/Device/ui/CurrentDevice/CurrentDevice.styled'
import {ChromeIcon} from 'features/User/Device/ui/icons/ChromeIcon'

type PropsType = {
    online: boolean
}
export const CurrentDevice = (props: PropsType) => {
    return (
        <CurrentDeviceStyled>
            <ChromeIcon />
            <div className={'deviceData'}>
                <h2>Chrome</h2>
                <p>IP: 22.345.345.12</p>
                {props.online ? (
                    <span className={'isOnline'}>Online</span>
                ) : (
                    <span className={'isOffline'}>Offline</span>
                )}
            </div>
        </CurrentDeviceStyled>
    )
}
