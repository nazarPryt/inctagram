import styled from 'styled-components'

export const BurgerMenuStyled = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    a,
    button {
        text-decoration: none;
        font-size: 35px;
        font-weight: bold;
        color: ${props => props.theme.textColor['100']};
    }

    a:hover,
    button:hover {
        color: ${props => props.theme.palette.primary['100']};
        transition: 0.1s linear;
    }
    button {
        svg {
            display: none;
        }
    }
`
export const BurgerModalStyled = styled.div``
