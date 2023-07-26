import React, {ComponentPropsWithoutRef, ReactNode} from 'react'
import styled from 'styled-components'

type PopoverItemProps = {
    name: string
    icon: ReactNode
} & ComponentPropsWithoutRef<'button'>
export const PopoverItem = ({name, icon, ...rest}: PopoverItemProps) => {
    return (
        <PopoverWrapperItem {...rest}>
            {icon}
            <span>{name}</span>
        </PopoverWrapperItem>
    )
}

export const PopoverWrapperItem = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    outline: none;
    border: none;
    background: inherit;
    color: ${props => props.theme.textColor[100]};

    path {
        fill: ${props => props.theme.textColor[100]};
    }

    cursor: pointer;
`
