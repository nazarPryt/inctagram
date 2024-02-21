import styled from 'styled-components'

export const ViewUserPostWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: calc(100vw - 64px - 64px);
    min-width: 300px;

    width: 100%;
    aspect-ratio: 16/9;
    max-height: calc(100vh - 70px);

    .left {
        display: flex;
        justify-content: center;
        min-width: 300px;
        overflow: hidden;
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0 15px;
        min-height: 450px;
        max-width: 500px;
        min-width: 360px;
        background-color: ${props => props.theme.bodyColor[300]};
    }
`
