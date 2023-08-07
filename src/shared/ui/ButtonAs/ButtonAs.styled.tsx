import {Component} from 'react'
import styled, {css} from 'styled-components'
import {ButtonVariantType} from 'shared/ui/ButtonAs/ButtonAs'

export const ComponentButtonAs = styled(Component)<{variant?: ButtonVariantType}>`
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
            case 'primary':
                return css`
                    background-color: ${({theme}) => theme.palette.primary[500]};
                    color: white;

                    &:active {
                        background-color: ${({theme}) => theme.palette.primary[700]};
                        color: white;
                    }

                    &:hover {
                        background-color: ${({theme}) => theme.palette.primary[100]};
                        color: white;
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
