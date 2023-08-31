import { ComponentProps, FC, forwardRef, ReactNode, useEffect } from 'react'

import * as Select from '@radix-ui/react-select'

import { ArrowDownIcon } from '../../assets/icons/ArrowDownIcon'
import { Typography } from '../Typography'

import { SelectContent, SelectIcon, SelectTrigger, SelectWrapper, StyledItem } from './Select.styled'

export type Option = { label: ReactNode | string; value: string }

type ConditionalMultipleProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  multiple?: true
  value: string
  onChange: (value: string) => void
}

type CommonProps = {
  disabled?: boolean
  placeholder?: string
  options: Array<Option>
  label?: string
  defaultValue?: string
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const CustomSelect: FC<SelectProps> = ({
  placeholder,
  value,
  options,
  label,
  defaultValue,
  disabled,
  onChange,
}) => {
  const triggerValue = options.find(el => el.value === value)?.label

  useEffect(() => {
    // document.body.style.overflow = 'hidden'
    // return () => {
    //     document.body.style.overflow = 'auto'
    // }
  }, [])

  return (
    <SelectWrapper>
      <Typography as="label" variant="regular_text_14">
        {label}
      </Typography>
      <Select.Root defaultValue={defaultValue} disabled={disabled} onValueChange={onChange}>
        <SelectTrigger style={{ margin: 0 }}>
          <Select.Value placeholder={placeholder || ''}>{triggerValue}</Select.Value>
          <SelectIcon>
            <ArrowDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent position="popper" style={{ margin: 0 }}>
          {options.map((option, i) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select.Root>
    </SelectWrapper>
  )
}

type DefaultDivType = ComponentProps<'div'>

type SelectItemType = DefaultDivType & {
  // TODO any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemType>(({ children, ...props }, ref) => {
  return (
    <StyledItem {...props} ref={ref}>
      {children}
    </StyledItem>
  )
})

SelectItem.displayName = 'SelectItem'
