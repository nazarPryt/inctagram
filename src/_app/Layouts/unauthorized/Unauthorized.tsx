import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { UnauthorizedStyled } from '_app/Layouts/unauthorized/Unauthorized.styled'
import { NotificationBar } from 'features/NotificationBar/NotificationBar'
import { Container } from 'shared/ui/Container/Container'
import { Header } from 'widgets/Header/Header'

export const Unauthorized: NextPage<PropsWithChildren> = ({ children }: PropsWithChildren) => {
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
