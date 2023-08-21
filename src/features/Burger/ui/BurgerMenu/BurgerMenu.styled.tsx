import styled from 'styled-components'

export const BurgerMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    a {
        width: 100%;
        font-size: 35px;
        margin-top: 0 !important;

        span {
            width: 30px;
            height: 30px;

            svg {
                width: 100%;
                height: 100%;
            }
        }
    }
    button {
        width: 100%;
        font-size: 35px;
        margin-top: 0 !important;
        padding: 0;

        svg {
            width: 30px;
            height: 30px;
        }
    }
`
