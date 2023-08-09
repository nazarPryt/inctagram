import styled from 'styled-components'
import {InputHTMLAttributes, ReactNode} from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode
    checkedIcon?: ReactNode
    uncheckedIcon?: ReactNode
}

export const CheckboxWrapper = styled.label<CheckboxProps>`
    display: inline-flex;
    font-size: ${props => props.theme.typography.fontSizeXS};
    align-items: center;
    margin: 18px 4px;
`

export const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`

export const StyledCheckbox = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`
