import React from 'react'
import {ComponentButtonAs} from 'shared/ui/ButtonAs/ButtonAs.styled'

export interface ButtonProps<T extends React.ElementType = 'button'> {
    as?: T
    children?: React.ReactNode
    variant?: 'primary' | 'contained' | 'outlined' | 'text'
    fullWidth?: boolean
    className?: string
}

export const ButtonAs = <T extends React.ElementType = 'button'>(
    props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: React.ForwardedRef<any>
) => {
    const {as: Component = 'button', variant = 'primary', fullWidth, className, ...otherProps} = props

    return <ComponentButtonAs ref={ref} fullWidth={fullWidth} {...otherProps} as={Component} />
}
