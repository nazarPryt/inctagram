import React, {ComponentPropsWithoutRef, ReactNode} from 'react'
import RadioCheckedIcon from '../../assets/icons/radio_button_checked.svg'
import RadioUncheckedIcon from '../../assets/icons/radio_button_unchecked.svg'
import {RadioInputWrapper} from './RadioInput.styled'

type RadioType = {
    label?: ReactNode
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>

export const RadioInput = ({label, checked, ...rest}: RadioType) => {
    return (
        <RadioInputWrapper>
            <input checked={checked} type='radio' {...rest} />
            <div className={'radioIcon'}>{checked ? <RadioCheckedIcon /> : <RadioUncheckedIcon />}</div>
            {label}
        </RadioInputWrapper>
    )
}
