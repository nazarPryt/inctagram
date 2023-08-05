import styled from 'styled-components'

export const PostCommentsWrapper = styled.div`
    flex: 1;
    max-height: 200px;
    overflow-x: scroll;
    padding: 10px;
    border-radius: 10px;
    background-color: ${props => props.theme.bodyColor[500]};
`
