import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { AuthorizedLayoutWrapper } from '_app/Layouts/authorized/AuthorizeLayout.style'
import { NotificationBar } from 'features/NotificationBar/NotificationBar'
import { Container } from 'shared/ui/Container/Container'
import { Aside } from 'widgets/Aside/Aside'
import { Header } from 'widgets/Header/Header'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({ children }: PropsWithChildren) => {
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
