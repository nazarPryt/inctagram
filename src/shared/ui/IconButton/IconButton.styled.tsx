import styled, {css} from 'styled-components'

export const IconButtonStyled = styled.button<{$colorful?: 'true'; $active?: 'true' | undefined}>`
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
            if (props.$active) {
                return css`
                    fill: ${props => props.theme.palette.primary['500']};
                `
            }
            if (!props.$colorful) {
                return css`
                    fill: ${props =>
                        props.theme.name === 'dark'
                            ? props.theme.textColor['100']
                            : props => props.theme.textColor['100']};
                `
            }
        }}
    }
`
