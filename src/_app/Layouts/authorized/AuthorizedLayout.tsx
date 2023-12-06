import React, {PropsWithChildren, ReactElement} from 'react'
import {Aside} from 'widgets/Aside/Aside'
import {NextPage} from 'next'
import {AuthorizedLayoutWrapper} from '_app/Layouts/authorized/AuthorizeLayout.style'
import {Container} from 'shared/ui/Container/Container'
import {Header} from 'widgets/Header/Header'
import {NotificationBar} from 'features/NotificationBar/NotificationBar'
import {useRouter} from 'next/router'
import {useMeQuery} from 'features/Auth/Me/api/Me.api'
import {PATH} from 'shared/constants/PATH'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({children}) => {
    const router = useRouter()
    const {data: user, isError} = useMeQuery()
    console.log('user', user)

    if (isError) {
        router.push(PATH.LOGIN)
    }

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
