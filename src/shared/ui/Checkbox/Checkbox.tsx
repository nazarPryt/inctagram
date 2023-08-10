import {CheckboxWrapper} from './Checkbox.styled'
import {ComponentPropsWithoutRef, ReactNode} from 'react'
import CheckedIcon from '../../assets/icons/Check-box.svg'
import UnCheckedIcon from '../../assets/icons/checkbox-unchecked.svg'

type CheckboxType = {
    label?: ReactNode
    onChange: () => void
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = ({label, checked, ...rest}: CheckboxType) => {
    return (
        <CheckboxWrapper>
            <input type={'checkbox'} {...rest} />
            <div className={'checkboxIcon'}>{checked ? <CheckedIcon /> : <UnCheckedIcon />}</div>
            {label}
        </CheckboxWrapper>
    )
}
