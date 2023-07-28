import styled from 'styled-components'

export const ViewUserPostWrapper = styled.div`
    display: flex;

    .pictureSlider {
        width: 600px;
        height: 600px;
    }

    .right {
        padding: 0 15px;
        background-color: ${props => props.theme.bodyColor[300]};
        width: 100%;
        min-width: 200px;
    }
`
