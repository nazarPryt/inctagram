import React, {PropsWithChildren, ReactElement} from 'react'
import {NextPage} from 'next'
import {NotificationBar} from 'features/NotificationBar/NotificationBar'
import {Header} from 'widgets/Header/Header'

export const Unauthorized: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <NotificationBar />
        </>
    )
}

export const getLayoutWithHeader = (page: ReactElement) => {
    return <Unauthorized>{page}</Unauthorized>
}
