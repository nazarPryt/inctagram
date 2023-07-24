import styled from 'styled-components'

export const LogOutModalWrapper = styled.div`
    max-width: 438px;
    margin: 0 auto;
    z-index: 1;
    position: relative;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 30px;
        margin: 30px 24px 0 24px;

        span {
            color: darkorange;
        }
    }
    .buttonsWrapper {
        display: flex;
        gap: 25px;
        justify-content: flex-end;
        margin: 30px 24px 0 24px;
        padding-bottom: 36px;

        button {
            width: 96px;
            height: 36px;
        }
    }
`
