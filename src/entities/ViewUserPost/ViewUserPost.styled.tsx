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
        width: 56%;
        height: 100%;
        min-height: 450px;
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

    .editStyle {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        padding: 0 15px;
        background-color: ${props => props.theme.bodyColor[300]};
        width: 40%;
        min-width: 200px;

        textarea {
            min-height: 130px;
            background-color: ${props => props.theme.bodyColor[700]};
            color: ${props => props.theme.textColor[700]};
        }

        button {
            align-self: end;
        }
    }
`
