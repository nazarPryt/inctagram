import React from 'react'
import {DevicesStyled} from 'features/User/Device/ui/Devices/Devices.styled'
import {CurrentDevice} from 'features/User/Device/ui/CurrentDevice/CurrentDevice'
import {Button} from 'shared/ui/Button/Button'
import {ActiveSession} from 'features/User/Device/ui/ActiveSession/ActiveSession'

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
            <CurrentDevice online={true} />

            <Button variant={'outlined'} onClick={handleTerminateAllSession} className={'terminateAllSession'}>
                Terminate all other session
            </Button>

            <h1>Active sessions</h1>
            <ActiveSession
                deviceName={'Apple iMac 27'}
                deviceType={'PC'}
                IP={'22.345.345.12'}
                lastVisit={'22.09.2022'}
                handleLogOut={handleLogOut}
            />
            <ActiveSession
                deviceName={'Iphone 14 Pro Max'}
                deviceType={'Phone'}
                IP={'22.345.345.12'}
                lastVisit={'22.09.2022'}
                handleLogOut={handleLogOut}
            />
        </DevicesStyled>
    )
}
