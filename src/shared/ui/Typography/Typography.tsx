import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyStyle } from './Typography.styled'

export type TypographyProps<T extends ElementType = 'p'> = ComponentPropsWithoutRef<T> & {
  as?: T
  color?: 'error' | 'inherit' | 'primary' | 'secondary'
  variant:
    | 'bold_text_14'
    | 'Bold_text_16'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'Medium_text_14'
    | 'regular_link'
    | 'regular_text_14'
    | 'regular_text_16'
    | 'semi_bold_small_text'
    | 'small_link'
    | 'small_text'
  className?: string
}

type VariantClassesType = {
  [key in TypographyProps['variant']]: React.ElementType
}

const variantClasses: VariantClassesType = {
  large: TypographyStyle.Large,
  h1: TypographyStyle.H1,
  h2: TypographyStyle.H2,
  h3: TypographyStyle.H3,
  regular_text_16: TypographyStyle.RegularText16,
  Bold_text_16: TypographyStyle.BoldText16,
  regular_text_14: TypographyStyle.RegularText14,
  Medium_text_14: TypographyStyle.MediumText14,
  bold_text_14: TypographyStyle.BoldText14,
  small_text: TypographyStyle.SmallText,
  semi_bold_small_text: TypographyStyle.SemiBoldSmallText,
  regular_link: TypographyStyle.RegularLink,
  small_link: TypographyStyle.SmallLink,
  error: TypographyStyle.Error,
}

export const Typography = <T extends ElementType = 'p'>(
  props: Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>> & TypographyProps<T>
) => {
  const { variant = 'large', color, className, as: Component = 'p', ...rest } = props

  const TypographyComponent = variantClasses[variant] || TypographyStyle.Large

  return <TypographyComponent as={Component} className={`${color}-color ${className}`} {...rest} />
}
