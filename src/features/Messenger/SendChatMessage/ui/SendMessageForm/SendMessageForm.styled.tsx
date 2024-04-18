import styled from 'styled-components'

export const SendMessageFormStyled = styled.form`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 5px;
    border-top: 1px solid ${props => props.theme.bodyColor[100]};

    .emoji {
        position: relative;

        .picker {
            position: absolute;
            bottom: 50px;
            right: 0;
        }
    }
`
