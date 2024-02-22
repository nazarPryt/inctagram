import {useEffect, useState} from 'react'

import {NotificationType, RemoveAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {AlertIcon, AlertItem, AlertWrapper, CloseAlertIcon, ProgressBar} from '@/features/NotificationBar/styled'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import Image from 'next/image'

import errorIcon from '../../../../public/pictures/errorIcon.png'
import successIcon from '../../../../public/pictures/success.png'
//import successIcon from '@/public/pictures/success.png' //todo check alias import from public folder

export const Alert = (props: NotificationType) => {
    const dispatch = useAppDispatch()
    const [exit, setExit] = useState(false)
    const [width, setWidth] = useState(0)
    const [intervalID, setIntervalID] = useState<any>(null)

    const handleStartTimer = () => {
        if (props.type) {
            const id = setInterval(() => {
                setWidth(prev => {
                    if (prev < 100) {
                        return prev + 0.5
                    }

                    clearInterval(id)

                    return prev
                })
            }, 20)

            setIntervalID(id)
        }
    }

    const handlePauseTimer = () => {
        clearInterval(intervalID)
    }

    const handleCloseNotification = () => {
        handlePauseTimer()
        setExit(true)
        setTimeout(() => {
            dispatch(RemoveAppNotificationAC({id: props.id}))
        }, 400)
    }

    useEffect(() => {
        if (width === 100) {
            handleCloseNotification()
        }
    }, [width])

    useEffect(() => {
        handleStartTimer()
    }, [])

    const handleClose = () => {
        dispatch(RemoveAppNotificationAC({id: props.id}))
        setExit(true)
    }

    return (
        <AlertWrapper $exit={exit} type={props.type}>
            <AlertItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
                <p>{props.message}</p>
                <CloseAlertIcon onClick={handleClose} />
                <ProgressBar style={{width: `${width}%`}} type={props.type} />
                {props.type === 'error' && (
                    <AlertIcon>
                        <Image alt={'errorIcon'} src={errorIcon} />
                    </AlertIcon>
                )}
                {props.type === 'success' && (
                    <AlertIcon>
                        <Image alt={'successIcon'} src={successIcon} />
                    </AlertIcon>
                )}
            </AlertItem>
        </AlertWrapper>
    )
}
