import React, {ComponentProps, forwardRef, ReactNode} from 'react'
import {IconButtonStyled} from 'shared/components/IconButton/IconButton.styled'

type DefaultButtonPropsType = ComponentProps<'button'>

type IconButtonProps = DefaultButtonPropsType & {
    children: ReactNode
    colorful?: 'true'
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    return (
        <IconButtonStyled ref={ref} {...props} type='button' $colorful={props.colorful}>
            {props.children}
        </IconButtonStyled>
    )
})

IconButton.displayName = 'IconButton'
