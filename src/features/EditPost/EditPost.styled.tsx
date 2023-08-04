import styled from 'styled-components'

export const EditPostWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 0 15px;
    background-color: ${props => props.theme.bodyColor[300]};
    width: 40%;
    min-width: 200px;

    textarea {
        width: 100%;
        min-height: 130px;
        background-color: ${props => props.theme.bodyColor[700]};
        color: ${props => props.theme.textColor[700]};
    }

    button {
        align-self: end;
    }
`
