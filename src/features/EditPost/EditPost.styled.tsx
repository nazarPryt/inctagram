import styled from 'styled-components'

export const EditPostWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 15px;
    background-color: ${props => props.theme.bodyColor[300]};
    width: 40%;
    min-width: 200px;

    .textArea {
        min-height: 130px;
        background-color: ${props => props.theme.bodyColor[700]};
        color: ${props => props.theme.textColor[700]};

        label {
            color: red;
        }
    }
    .buttonsWrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-evenly;

        button {
            align-self: end;
            justify-self: flex-end;
        }
    }
`
