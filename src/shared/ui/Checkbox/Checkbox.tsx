import {CheckboxWrapper} from './Checkbox.styled'
import {ComponentProps, forwardRef, ReactNode} from 'react'
import CheckedIcon from '../../assets/icons/Check-box.svg'
import UnCheckedIcon from '../../assets/icons/checkbox-unchecked.svg'

type DefaultInputPropsType = ComponentProps<'input'>
type CheckboxType = DefaultInputPropsType & {
    label?: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxType>((props, ref) => {
    const {label, checked, ...rest} = props
    return (
        <CheckboxWrapper>
            <input type={'checkbox'} checked={checked} ref={ref} {...rest} />
            <div className={'checkboxIcon'}>{checked ? <CheckedIcon /> : <UnCheckedIcon />}</div>
            {label}
        </CheckboxWrapper>
    )
})
Checkbox.displayName = 'Checkbox'
