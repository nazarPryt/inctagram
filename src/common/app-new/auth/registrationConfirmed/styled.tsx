import styled from 'styled-components'

export const ConfirmationPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h1 {
        font-size: 20px;
        font-weight: 700;
        color: ${props => props.theme.textColor};
    }
    p {
        font-size: 16px;
        font-weight: 400;
        color: ${props => props.theme.textColor};
    }
    button {
        margin-bottom: 20px;
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
