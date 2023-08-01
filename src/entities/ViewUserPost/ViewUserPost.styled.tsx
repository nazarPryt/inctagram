import styled from 'styled-components'

export const ViewUserPostWrapper = styled.div`
    display: flex;
    width: 800px;

    .pictureSlider {
        width: 60%;
        display: flex;
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0 15px;
        background-color: ${props => props.theme.bodyColor[300]};
        height: 800px;
        width: 40%;
        min-width: 200px;
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
