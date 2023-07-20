import styled, {css} from 'styled-components'

export const IconButtonStyled = styled.button<{$colorful?: 'true'}>`
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 35px;
    height: 35px;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1);
    }
    path {
        ${props => {
            if (!props.$colorful) {
                return css`
                    fill: ${props =>
                        props.theme.name === 'dark'
                            ? props.theme.palette.common.white
                            : props => props.theme.palette.common.black};
                `
            }
        }}
    }
`
