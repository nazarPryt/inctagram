import { ElementType } from 'react'

import { ButtonProps, ComponentButton } from 'shared/ui/Button/Button.styled'

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>): JSX.Element => {
  const { asT: Component = 'button', variant = 'primary', fullwidth, className, ...rest } = props

  return <ComponentButton as={Component} className={className} fullwidth={fullwidth} variant={variant} {...rest} />
}
