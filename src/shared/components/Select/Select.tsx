import * as SelectRadix from '@radix-ui/react-select'
import {clsx} from 'clsx'
import {CSSProperties, FC, ReactNode} from 'react'
import {ArrowDownIcon} from '../../../common/assets/icons/ArrowDownIcon'
import {Typography} from '../Typography'
import {Main} from './Select.styled'

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
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select: FC<SelectProps> = ({
    variant = 'primary',
    placeholder,
    value,
    disabled,
    className,
    onChange,
    errorMessage,
    options,
    label,
    rootClassName,
    width,
}) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const classNames = {
        root: rootClassName,
        trigger: clsx('trigger', variant, showError && 'error', className),
        icon: clsx('icon', variant),
        item: clsx('item', variant),
        content: clsx('content', variant),
        label: clsx('label', disabled && 'disabled'),
    }
    const withoutPlaceholder = options[0].label
    const triggerValue = options.find(el => el.value === value)?.label
    const rootStyles = {width}

    return (
        <Main className={classNames.root}>
            <Typography variant={'regular_text_14'} as='label' className={classNames.label}>
                {label}
            </Typography>
            <SelectRadix.Root disabled={disabled} onValueChange={onChange}>
                <SelectRadix.Trigger className={classNames.trigger} style={rootStyles}>
                    <SelectRadix.Value placeholder={placeholder || withoutPlaceholder}>
                        {triggerValue}
                    </SelectRadix.Value>
                    <SelectRadix.Icon className={classNames.icon}>
                        <ArrowDownIcon />
                    </SelectRadix.Icon>
                </SelectRadix.Trigger>
                <SelectRadix.Content className={classNames.content} position={'popper'}>
                    {options.map((option, i) => (
                        <SelectRadix.Item value={option.value} className={classNames.item} key={option.value}>
                            {option.label}
                        </SelectRadix.Item>
                    ))}
                </SelectRadix.Content>
                {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
            </SelectRadix.Root>
        </Main>
        /////
    )
}
