import {toast} from 'react-toastify'

import {useTerminateAllSessionsMutation} from '../api/devices.api'

export const useTerminateAllSessions = () => {
    const [terminateAll, {isLoading: isTerminatingAll}] = useTerminateAllSessionsMutation()

    const handleTerminateAllSession = () => {
        toast.promise(terminateAll, {
            error: 'something went wrong 🤯',
            pending: 'Wait please...',
            success: 'All other sessions were successfully terminated',
        })
    }

    return {
        handleTerminateAllSession,
        isTerminatingAll,
    }
}
