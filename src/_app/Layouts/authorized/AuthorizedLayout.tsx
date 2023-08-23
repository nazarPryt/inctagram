import React, {PropsWithChildren, ReactElement} from 'react'
import {Aside} from 'widgets/Aside/Aside'
import {NextPage} from 'next'
import {Unauthorized} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthorizedLayoutWrapper} from '_app/Layouts/authorized/AuthorizeLayout.style'
import {Container} from 'shared/ui/Container/Container'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <Unauthorized>
            <Container>
                <AuthorizedLayoutWrapper>
                    <Aside />
                    <section>{children}</section>
                </AuthorizedLayoutWrapper>
            </Container>
        </Unauthorized>
    )
}

export const getAuthorizedLayout = (page: ReactElement) => {
    return <AuthorizedLayout>{page}</AuthorizedLayout>
}
