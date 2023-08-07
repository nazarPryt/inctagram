import React, {forwardRef} from 'react'
import {ComponentButtonAs} from 'shared/ui/ButtonAs/ButtonAs.styled'

export type ButtonVariantType = 'primary' | 'contained' | 'outlined' | 'text' | 'link'

export interface ButtonProps<T extends React.ElementType = 'button'> {
    as?: T
    children?: React.ReactNode
    variant?: ButtonVariantType
    fullWidth?: boolean
    className?: string
}

export const ButtonAs = forwardRef<React.ForwardedRef<any>, ButtonProps>((props, ref) => {
    const {as: Component = 'button', variant = 'primary', fullWidth, className, ...otherProps} = props

    return <ComponentButtonAs as={Component} variant={variant} {...otherProps} />
})

ButtonAs.displayName = 'ButtonAs'

// export const ButtonAs = <T extends React.ElementType = 'button'>(
//     props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
//     ref: React.ForwardedRef<any>
// ) => {
//     const {as: Component = 'button', variant = 'primary', fullWidth, className, ...otherProps} = props
//
//     return <ComponentButtonAs ref={ref} fullWidth={fullWidth} {...otherProps} as={Component} />
// }

// ButtonAs.displayName = 'ButtonAs'
//    function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
