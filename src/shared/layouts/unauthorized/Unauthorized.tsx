import {PropsWithChildren, ReactElement} from 'react'

import {useMeQuery} from '@/features/Auth/Me/api/Me.api'
import {NotificationBar} from '@/features/NotificationBar/NotificationBar'
import {PATH} from '@/shared/constants/PATH'
import {Header} from '@/widgets/Header/Header'
import {Container} from '@nazar-pryt/inctagram-ui-kit'
import {NextPage} from 'next'
import {useRouter} from 'next/router'

import {UnauthorizedStyled} from './Unauthorized.styled'

const Unauthorized: NextPage<PropsWithChildren> = ({children}) => {
    const router = useRouter()
    const {isSuccess} = useMeQuery()

    if (isSuccess) {
        router.push(PATH.HOME)
    }

    return (
        <UnauthorizedStyled>
            <Container>
                <Header isLoggedIn={isSuccess} />
            </Container>
            {children}
            <NotificationBar />
        </UnauthorizedStyled>
    )
}

export const getLayoutWithHeader = (page: ReactElement) => {
    return <Unauthorized>{page}</Unauthorized>
}
