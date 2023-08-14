import styled from 'styled-components'

export const RadioInputWrapper = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    input[type='radio'] {
        position: absolute;
        opacity: 0;
    }

    .radioIcon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    path {
        fill: ${props => props.theme.textColor[100]};
    }
`
