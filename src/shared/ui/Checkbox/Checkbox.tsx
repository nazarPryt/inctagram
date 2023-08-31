import { ComponentProps, forwardRef, ReactNode } from 'react'

import CheckedIcon from '../../assets/icons/Check-box.svg'
import UnCheckedIcon from '../../assets/icons/checkbox-unchecked.svg'

import { CheckboxWrapper } from './Checkbox.styled'

type DefaultInputPropsType = ComponentProps<'input'>
type CheckboxType = DefaultInputPropsType & {
  label?: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxType>((props, ref) => {
  const { label, checked, ...rest } = props

  return (
    <CheckboxWrapper>
      <input ref={ref} checked={checked} type="checkbox" {...rest} />
      <div className="checkboxIcon">{checked ? <CheckedIcon /> : <UnCheckedIcon />}</div>
      {label}
    </CheckboxWrapper>
  )
})
Checkbox.displayName = 'Checkbox'
