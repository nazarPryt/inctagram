import React, {PropsWithChildren, ReactElement} from 'react'
import {NextPage} from 'next'
import {NotificationBar} from 'features/NotificationBar/NotificationBar'
import {Header} from 'widgets/Header/Header'
import {UnauthorizedStyled} from '_app/Layouts/unauthorized/Unauthorized.styled'
import {Container} from 'shared/ui/Container/Container'

export const Unauthorized: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <UnauthorizedStyled>
            <Container>
                <Header />
            </Container>
            {children}
            <NotificationBar />
        </UnauthorizedStyled>
    )
}

export const getLayoutWithHeader = (page: ReactElement) => {
    return <Unauthorized>{page}</Unauthorized>
}
