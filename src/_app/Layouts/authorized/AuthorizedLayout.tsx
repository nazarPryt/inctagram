import React, {PropsWithChildren, ReactElement} from 'react'
import {Aside} from 'widgets/Aside/Aside'
import {NextPage} from 'next'
import {AuthorizedLayoutWrapper} from '_app/Layouts/authorized/AuthorizeLayout.style'
import {Container} from 'shared/ui/Container/Container'
import {Header} from 'widgets/Header/Header'
import {NotificationBar} from 'features/NotificationBar/NotificationBar'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <Container>
            <AuthorizedLayoutWrapper>
                <Header />
                <Aside />
                <section>{children}</section>
            </AuthorizedLayoutWrapper>
            <NotificationBar />
        </Container>
    )
}

export const getAuthorizedLayout = (page: ReactElement) => {
    return <AuthorizedLayout>{page}</AuthorizedLayout>
}
