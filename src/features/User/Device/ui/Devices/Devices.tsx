import {ActiveSession} from 'features/User/Device/ui/ActiveSession/ActiveSession'
import {CurrentDevice} from 'features/User/Device/ui/CurrentDevice/CurrentDevice'
import {DevicesStyled} from 'features/User/Device/ui/Devices/Devices.styled'
import {Button} from 'shared/ui/Button/Button'

export const Devices = () => {
    const handleLogOut = () => {
        alert('handle LogOut session')
    }
    const handleTerminateAllSession = () => {
        alert('handle Terminate all other session')
    }

    return (
        <DevicesStyled>
            <h1>This devices</h1>
            <CurrentDevice online />

            <Button className={'terminateAllSession'} onClick={handleTerminateAllSession} variant={'outlined'}>
                Terminate all other session
            </Button>

            <h1>Active sessions</h1>
            <ActiveSession
                IP={'22.345.345.12'}
                deviceName={'Apple iMac 27'}
                deviceType={'PC'}
                handleLogOut={handleLogOut}
                lastVisit={'22.09.2022'}
            />
            <ActiveSession
                IP={'22.345.345.12'}
                deviceName={'Iphone 14 Pro Max'}
                deviceType={'Phone'}
                handleLogOut={handleLogOut}
                lastVisit={'22.09.2022'}
            />
        </DevicesStyled>
    )
}
