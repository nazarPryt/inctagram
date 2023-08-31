import { useEffect, useState } from 'react'

import Image from 'next/image'

import { NotificationType, RemoveAppNotificationAC } from '_app/store/appSlice'
import { AlertIcon, AlertItem, AlertWrapper, CloseAlertIcon, ProgressBar } from 'features/NotificationBar/styled'
import errorIcon from 'shared/assets/icons/errorIcon.png'
import successIcon from 'shared/assets/icons/success.png'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const Alert = ({ id, type, message }: NotificationType): JSX.Element => {
  const dispatch = useAppDispatch()
  const [exit, setExit] = useState(false)
  const [width, setWidth] = useState(0)
  // TODO any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [intervalID, setIntervalID] = useState<any>(null)

  const handleStartTimer = (): void => {
    if (type) {
      const timerId = setInterval(() => {
        setWidth(prev => {
          if (prev < 100) {
            return prev + 0.5
          }

          clearInterval(timerId)

          return prev
        })
      }, 20)

      setIntervalID(id)
    }
  }

  const handlePauseTimer = (): void => {
    clearInterval(intervalID)
  }

  const handleCloseNotification = (): void => {
    handlePauseTimer()
    setExit(true)
    setTimeout(() => {
      dispatch(RemoveAppNotificationAC({ id }))
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

  const handleClose = (): void => {
    dispatch(RemoveAppNotificationAC({ id }))
    setExit(true)
  }

  return (
    <AlertWrapper $exit={exit} type={type}>
      <AlertItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
        <p>{message}</p>
        <CloseAlertIcon onClick={handleClose} />
        <ProgressBar style={{ width: `${width}%` }} type={type} />
        {type === 'error' && (
          <AlertIcon>
            <Image alt="errorIcon" src={errorIcon} />
          </AlertIcon>
        )}
        {type === 'success' && (
          <AlertIcon>
            <Image alt="successIcon" src={successIcon} />
          </AlertIcon>
        )}
      </AlertItem>
    </AlertWrapper>
  )
}
