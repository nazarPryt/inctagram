'use client'
import React, {useEffect, useState} from 'react'

import errorIcon from '../../../shared/assets/icons/errorIcon.png'
import successIcon from '../../../shared/assets/icons/success.png'
import {AlertIcon, AlertItem, AlertWrapper, CloseAlertIcon, ProgressBar} from 'features/NotificationBar/styled'
import {NotificationType, RemoveAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import Image from 'next/image'

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
                <ProgressBar type={props.type} style={{width: `${width}%`}} />
                {props.type === 'error' && (
                    <AlertIcon>
                        <Image src={errorIcon} alt={'errorIcon'} />
                    </AlertIcon>
                )}
                {props.type === 'success' && (
                    <AlertIcon>
                        <Image src={successIcon} alt={'successIcon'} />
                    </AlertIcon>
                )}
            </AlertItem>
        </AlertWrapper>
    )
}
