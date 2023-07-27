import React, {ComponentProps, forwardRef, ReactNode} from 'react'
import {IconButtonStyled} from './IconButton.styled'

type DefaultButtonPropsType = ComponentProps<'button'>

type IconButtonProps = DefaultButtonPropsType & {
    children: ReactNode
    colorful?: 'true'
    active?: 'true' | undefined
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    return (
        <IconButtonStyled ref={ref} {...props} type='button' $active={props.active} $colorful={props.colorful}>
            {props.children}
        </IconButtonStyled>
    )
})

IconButton.displayName = 'IconButton'
