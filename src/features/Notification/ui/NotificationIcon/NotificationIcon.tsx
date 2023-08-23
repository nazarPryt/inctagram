import React from 'react'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import {NotificationIconWrapper} from './NotificationIcon.styled'

type PropsType = {
    notificationCount: number
}
export const NotificationIcon = ({notificationCount}: PropsType) => {
    return (
        <NotificationIconWrapper>
            <IconButton>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path
                        d='M2.51436 18L3.69436 16.818C4.07236 16.44 4.28036 15.938 4.28036 15.404V10.727C4.28036 9.36996 4.87036 8.07296 5.90036 7.17096C6.93836 6.26096 8.26036 5.86096 9.63736 6.04196C11.9644 6.35096 13.7194 8.45496 13.7194 10.937V15.404C13.7194 15.938 13.9274 16.44 14.3044 16.817L15.4854 18H2.51436ZM10.9994 20.341C10.9994 21.24 10.0834 22 8.99936 22C7.91536 22 6.99936 21.24 6.99936 20.341V20H10.9994V20.341ZM17.5204 17.208L15.7194 15.404V10.937C15.7194 7.45596 13.2174 4.49896 9.89936 4.05996C7.97736 3.80396 6.03736 4.39096 4.58236 5.66696C3.11836 6.94896 2.28036 8.79296 2.28036 10.727L2.27936 15.404L0.478359 17.208C0.00935877 17.678 -0.129641 18.377 0.124359 18.99C0.379359 19.604 0.972359 20 1.63636 20H4.99936V20.341C4.99936 22.359 6.79336 24 8.99936 24C11.2054 24 12.9994 22.359 12.9994 20.341V20H16.3624C17.0264 20 17.6184 19.604 17.8724 18.991C18.1274 18.377 17.9894 17.677 17.5204 17.208Z'
                        fill='white'
                    />
                </svg>
                <span>{notificationCount}</span>
            </IconButton>
        </NotificationIconWrapper>
    )
}
