import {toast} from 'react-toastify'

import {useTerminateSessionMutation} from '../api/devices.api'

export const useTerminateSession = () => {
    const [terminateSession, {isLoading: isTerminatingSession}] = useTerminateSessionMutation()

    const handleLogOut = (deviceId: number) => {
        toast.promise(terminateSession(deviceId), {
            error: 'something went wrong 🤯',
            pending: 'Wait please...',
            success: `Session with deviceId: ${deviceId} was successfully terminated`,
        })
    }

    return {handleLogOut, isTerminatingSession}
}
