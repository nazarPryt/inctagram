import {PropsWithChildren, ReactElement} from 'react'

import {PATH} from '@/_app/AppSettings/PATH'
import {useMeQuery} from '@/features/Auth/Me/api/me.api'
import {NotificationBar} from '@/features/NotificationBar/NotificationBar'
import {Aside} from '@/widgets/Aside/Aside'
import {Header} from '@/widgets/Header/Header'
import {Container} from '@nazar-pryt/inctagram-ui-kit'
import {NextPage} from 'next'
import {useRouter} from 'next/router'

import {AuthorizedLayoutWrapper} from './AuthorizeLayout.style'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({children}) => {
    const router = useRouter()
    const {isError, isSuccess} = useMeQuery()

    if (isError) {
        router.push(PATH.LOGIN)
    }

    return (
        <Container>
            <AuthorizedLayoutWrapper>
                <Header isLoggedIn={isSuccess} />
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
