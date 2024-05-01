import styled from 'styled-components'

export const AllChatsStyled = styled.div`
    flex: 1;
    outline: 1px solid ${props => props.theme.bodyColor[100]};
    padding: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
`
