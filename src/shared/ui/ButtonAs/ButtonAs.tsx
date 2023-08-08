import React, {ComponentPropsWithoutRef, ElementType} from 'react'
import {ComponentButtonAs} from 'shared/ui/ButtonAs/ButtonAs.styled'

export type ButtonVariantType = 'primary' | 'contained' | 'outlined' | 'text' | 'link'

export type ButtonAsProps<T extends ElementType = 'button'> = {
    ast?: T
    children?: React.ReactNode
    variant?: ButtonVariantType
    fullwidth?: boolean
    className?: string
} & ComponentPropsWithoutRef<T>

export const ButtonAs = <T extends ElementType = 'button'>(props: ButtonAsProps<T>) => {
    const {ast: Component = 'button', variant = 'primary', fullwidth, className, ...rest} = props

    return <ComponentButtonAs as={Component} variant={variant} fullwidth={fullwidth} className={className} {...rest} />
}

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
