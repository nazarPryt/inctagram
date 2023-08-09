import {CheckboxInput, CheckboxProps, CheckboxWrapper, StyledCheckbox} from './Checkbox.styled'
import {FC, ReactNode} from 'react'
import CheckedIcon from '../../assets/icons/Check-box.svg'
import UnCheckedIcon from '../../assets/icons/checkbox-unchecked.svg'

export const CustomCheckbox: FC<CheckboxProps & {label: ReactNode; onChange: () => void}> = ({
    label,
    checked,
    checkedIcon,
    uncheckedIcon,
    ...rest
}) => {
    return (
        <CheckboxWrapper>
            <CheckboxInput {...rest} />
            <StyledCheckbox>{checked ? <CheckedIcon /> : <UnCheckedIcon />}</StyledCheckbox>
            {label}
        </CheckboxWrapper>
    )
}
