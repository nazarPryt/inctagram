import React, {ComponentPropsWithoutRef, ElementType} from 'react'
import {ComponentButton} from 'shared/ui/Button/Button.styled'

export type ButtonVariantType = 'primary' | 'contained' | 'outlined' | 'text' | 'link'

export type ButtonProps<T extends ElementType = 'button'> = {
    asT?: T
    children?: React.ReactNode
    variant?: ButtonVariantType
    fullwidth?: boolean
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const {asT: Component = 'button', variant = 'primary', fullwidth, className, ...rest} = props

    return <ComponentButton as={Component} variant={variant} fullwidth={fullwidth} className={className} {...rest} />
}
