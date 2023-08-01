import styled from 'styled-components'

export const ForgotPasswordStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin: 0 0 35px 0;
        padding: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 36px;
        color: ${props => props.theme.textColor['100']};
    }

    h2 {
        padding: 0;
        text-align: start;
        font-size: 14px;
        line-height: 24px;
        color: ${props => props.theme.textColor[900]};
        margin: 0;
    }

    .captcha {
        margin-top: 30px;
    }
    button {
        height: 36px;
        width: 100%;
        margin-top: 30px;
    }
`
