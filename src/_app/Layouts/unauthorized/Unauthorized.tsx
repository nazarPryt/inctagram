import React, {PropsWithChildren, ReactElement} from 'react'
import {NextPage} from 'next'
import {NotificationBar} from 'features/NotificationBar/NotificationBar'
import {Header} from 'widgets/Header/Header'
import {UnauthorizedStyled} from '_app/Layouts/unauthorized/Unauthorized.styled'
import {Container} from 'shared/ui/Container/Container'
import {useRouter} from 'next/router'
import {useMeQuery} from 'features/Auth/Me/api/Me.api'
import {PATH} from 'shared/constants/PATH'

export const Unauthorized: NextPage<PropsWithChildren> = ({children}) => {
    const router = useRouter()
    const {data: user, isSuccess} = useMeQuery()
    console.log('user', user)

    if (isSuccess) {
        router.push(PATH.HOME)
    }
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
