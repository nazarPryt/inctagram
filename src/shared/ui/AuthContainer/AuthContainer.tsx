import { ReactNode } from 'react'

import styled from 'styled-components'

export const AuthContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  font-family: Inter, sans-serif;
  text-align: center;

  .content {
    width: 100%;
    max-width: 400px;
    padding: 23px;

    background-color: ${props => props.theme.bodyColor['500']};
    border: 1px solid ${props => props.theme.bodyColor['300']};
  }
`

export const AuthContainer = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <AuthContainerWrapper>
      <div className="content">{children}</div>
    </AuthContainerWrapper>
  )
}
