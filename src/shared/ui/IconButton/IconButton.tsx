import React, {ComponentPropsWithoutRef, forwardRef, ReactNode} from 'react'
import {IconButtonStyled} from './IconButton.styled'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export type IconButtonType = DefaultButtonPropsType & {
    children: ReactNode
    colorful?: boolean
    active?: boolean
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonType>((props, ref) => {
    return (
        <IconButtonStyled ref={ref} type='button' active={props.active} colorful={props.colorful} {...props}>
            {props.children}
        </IconButtonStyled>
    )
})

IconButton.displayName = 'IconButton'
