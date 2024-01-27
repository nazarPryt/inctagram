import {PropsWithChildren, ReactElement} from 'react'

import {UnauthorizedStyled} from '@/_app/Layouts/unauthorized/Unauthorized.styled'
import {useMeQuery} from '@/features/Auth/Me/api/Me.api'
import {NotificationBar} from '@/features/NotificationBar/NotificationBar'
import {PATH} from '@/shared/constants/PATH'
import {Container} from '@/shared/ui/Container/Container'
import {Header} from '@/widgets/Header/Header'
import {NextPage} from 'next'
import {useRouter} from 'next/router'

export const Unauthorized: NextPage<PropsWithChildren> = ({children}) => {
    const router = useRouter()
    const {isSuccess} = useMeQuery()

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
