import styled from 'styled-components'

export const MessengerStyled = styled.div`
    h3 {
        margin-bottom: 20px;
    }
    .wrapper {
        display: flex;
        outline: 1px solid ${props => props.theme.bodyColor[100]};
        height: calc(100vh - 200px);
    }
`
