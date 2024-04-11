import styled from 'styled-components'

export const ChatUsersListStyled = styled.div`
    flex: 1;
    outline: 1px solid ${props => props.theme.bodyColor[100]};
    padding: 10px;

    .box {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
