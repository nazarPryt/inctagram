import styled from 'styled-components'

export const EmailResendWrapper = styled.div`
    h1 {
        font-size: 20px;
        font-weight: 700;
        color: ${props => props.theme.textColor[100]};
    }
    p {
        font-size: 16px;
        font-weight: 400;
        color: ${props => props.theme.textColor[100]};
    }

    span {
        width: 100%;
        max-width: 400px;

        img {
            width: 100%;
            height: auto;
        }
    }
`
