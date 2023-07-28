import styled from 'styled-components'

export const ViewUserPostWrapper = styled.div`
    display: flex;

    .pictureWrapper {
    }

    .right {
        padding: 0 15px;
        background-color: ${props => props.theme.bodyColor[300]};
        width: 100%;
        min-width: 200px;
    }
`
