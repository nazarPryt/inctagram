import * as Select from '@radix-ui/react-select'
import {ComponentProps, CSSProperties, FC, forwardRef, ReactNode} from 'react'
import {ArrowDownIcon} from '../../assets/icons/ArrowDownIcon'
import {Typography} from '../Typography'
import {SelectContent, SelectIcon, SelectTrigger, SelectWrapper, StyledItem} from './Select.styled'

export type Option = {label: string | ReactNode; value: string}

type ConditionalMultipleProps = {
    multiple?: true
    value: string
    onChange: (value: string) => void
}

type CommonProps = {
    className?: string
    disabled?: boolean
    name?: string
    placeholder?: string
    required?: boolean
    variant?: 'primary' | 'pagination'
    options: Array<Option>
    portal?: boolean
    errorMessage?: string
    label?: string
    width?: CSSProperties['width']
    rootClassName?: string
    defaultValue?: string
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const CustomSelect: FC<SelectProps> = ({placeholder, value, options, label}) => {
    const triggerValue = options.find(el => el.value === value)?.label

    return (
        <SelectWrapper>
            <Typography variant={'regular_text_14'} as='label' className={'label'}>
                {label}
            </Typography>
            <Select.Root>
                <SelectTrigger>
                    <Select.Value placeholder={placeholder || ''}>{triggerValue}</Select.Value>
                    <SelectIcon>
                        <ArrowDownIcon />
                    </SelectIcon>
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, i) => (
                        <SelectItem value={option.value} key={option.value}>
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
    value: any
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemType>(({children, ...props}, ref) => {
    return (
        <StyledItem {...props} ref={ref}>
            <Select.ItemText>{children}</Select.ItemText>
        </StyledItem>
    )
})
SelectItem.displayName = 'SelectItem'
