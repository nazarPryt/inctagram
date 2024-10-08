import {IsEmpty} from '@/shared/ui/IsEmpty'
import {NoPosts} from '@/shared/ui/NoPosts'
import {Button} from '@nazar-pryt/inctagram-ui-kit'

import {DevicesStyled} from './Devices.styled'
import {useGetAllSessionsQuery} from './api/devices.api'
import {useTerminateAllSessions} from './hook/useTerminateAllSessions'
import {useTerminateSession} from './hook/useTerminateSession'
import {ActiveSession} from './ui/ActiveSession'
import {CurrentDevice} from './ui/CurrentDevice'
import {DevicesSkeleton} from './ui/DevicesSkeleton'

export const Devices = () => {
    const {data: sessions, isLoading} = useGetAllSessionsQuery()
    const {handleLogOut, isTerminatingSession} = useTerminateSession()
    const {handleTerminateAllSession, isTerminatingAll} = useTerminateAllSessions()

    const isButtonDisabled = isTerminatingSession || isTerminatingAll

    if (isLoading) {
        return <DevicesSkeleton />
    }

    if (!sessions) {
        return <IsEmpty text={'No sessions found'} />
    }
    const currentDevice = sessions.current

    return (
        <DevicesStyled>
            <h1>This devices</h1>
            <CurrentDevice
                browserName={currentDevice.browserName}
                browserVersion={currentDevice.browserVersion}
                deviceId={currentDevice.deviceId}
                ip={currentDevice.ip}
                lastActive={currentDevice.lastActive}
                online
                osName={currentDevice.osName}
                osVersion={currentDevice.osVersion}
            />

            <Button
                className={'terminateAllSession'}
                disabled={isButtonDisabled}
                onClick={handleTerminateAllSession}
                variant={'outlined'}
            >
                Terminate all other session
            </Button>

            <h1>Active sessions</h1>
            <div className={'allSessionsBox'}>
                {sessions.others.map(session => {
                    return (
                        <ActiveSession
                            IP={session.ip}
                            browserName={`${session.browserName} ${session.browserVersion}`}
                            deviceId={session.deviceId}
                            deviceName={`${session.osName} ${session.osVersion}`}
                            deviceType={'PC'}
                            disabled={isButtonDisabled}
                            handleLogOut={handleLogOut}
                            key={session.deviceId}
                            lastVisit={session.lastActive}
                        />
                    )
                })}
            </div>
        </DevicesStyled>
    )
}
