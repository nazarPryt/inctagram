import styled, {css} from 'styled-components'

export const Button = styled.button<{variant?: 'contained' | 'outlined' | 'text' | 'isIcon'}>`
    border-radius: 2px;
    padding: 6px 24px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: 600;
    font-family: Inter, sans-serif;
    letter-spacing: 0.7px;

    ${props => {
        switch (props.variant) {
            case 'contained':
                return css`
                    background-color: ${({theme}) => theme.bodyColor[100]};
                    color: ${({theme}) => theme.textColor[900]};

                    &:active {
                        background-color: ${({theme}) => theme.palette.primary[700]};
                    }

                    &:hover {
                        background-color: ${({theme}) => theme.bodyColor[100]};
                        color: ${({theme}) => theme.textColor[300]};
                    }

                    &:focus {
                        background-color: ${({theme}) => theme.bodyColor[100]};
                        color: ${({theme}) => theme.textColor[900]};
                        border: 2px solid ${({theme}) => theme.palette.primary[700]};
                    }

                    &:disabled {
                        background-color: ${({theme}) => theme.bodyColor[900]};
                        color: ${({theme}) => theme.textColor[100]};
                        cursor: not-allowed;
                    }
                `
            case 'text':
                return css`
                    background-color: inherit;
                    color: ${({theme}) => theme.palette.primary[500]};

                    &:active {
                        color: ${({theme}) => theme.palette.primary[700]};
                    }

                    &:hover {
                        color: ${({theme}) => theme.palette.primary[100]};
                    }

                    &:focus {
                        color: ${({theme}) => theme.palette.primary[500]};
                        border: 2px solid ${({theme}) => theme.palette.primary[700]};
                    }

                    &:disabled {
                        color: ${({theme}) => theme.palette.primary[900]};
                        cursor: not-allowed;
                    }
                `
            case 'outlined':
                return css`
                    background-color: inherit;
                    color: ${({theme}) => theme.palette.primary[500]};
                    border: 1px solid ${({theme}) => theme.palette.primary[500]};

                    &:active {
                        color: ${({theme}) => theme.palette.primary[700]};
                    }

                    &:hover {
                        border: 1px solid ${({theme}) => theme.palette.primary[100]};
                        color: ${({theme}) => theme.palette.primary[100]};
                    }

                    &:focus {
                        color: ${({theme}) => theme.palette.primary[700]};
                        border: 2px solid ${props => props.theme.palette.primary[700]};
                    }

                    &:disabled {
                        border: 2px solid ${props => props.theme.palette.primary[900]};
                        color: ${({theme}) => theme.palette.primary[900]};
                        cursor: not-allowed;
                    }
                `
            case 'isIcon':
                return css`
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    background-color: inherit;
                    color: ${({theme}) => theme.textColor[100]};
                    font-size: 14px;
                    font-weight: 500;

                    & svg path {
                        fill: ${({theme}) => theme.palette.primary[700]};
                    }

                    &:active {
                        color: ${({theme}) => theme.palette.primary[700]};

                        & svg path {
                            fill: ${({theme}) => theme.palette.primary[700]};
                        }
                    }

                    &:hover {
                        color: ${({theme}) => theme.palette.primary[100]};

                        & svg path {
                            fill: ${({theme}) => theme.palette.primary[100]};
                        }
                    }

                    &:focus {
                        color: ${({theme}) => theme.palette.primary[700]};

                        & svg path {
                            fill: ${({theme}) => theme.palette.primary[700]};
                        }
                    }

                    &:disabled {
                        color: ${({theme}) => theme.palette.primary[900]};
                        cursor: not-allowed;

                        & svg path {
                            fill: ${({theme}) => theme.palette.primary[900]};
                        }
                    }
                `
            default:
                return css`
                    background-color: ${({theme}) => theme.palette.primary[500]};
                    color: ${({theme}) => theme.textColor[100]};

                    &:active {
                        background-color: ${({theme}) => theme.palette.primary[700]};
                        color: ${({theme}) => theme.textColor[500]};
                    }

                    &:hover {
                        background-color: ${({theme}) => theme.palette.primary[100]};
                        color: ${({theme}) => theme.textColor[100]};
                    }

                    &:focus {
                        background-color: ${({theme}) => theme.palette.primary[700]};
                        color: ${({theme}) => theme.textColor[100]};
                    }

                    &:disabled {
                        background-color: ${({theme}) => theme.palette.primary[900]};
                        color: ${({theme}) => theme.textColor[900]};
                        cursor: not-allowed;
                    }
                `
        }
    }}
`
