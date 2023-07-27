import React, {ComponentPropsWithoutRef, ReactNode} from 'react'
import {NavButtonWrapper} from '../../../../widgets/Aside/ui/NavButton/NavButton.styled'

type PopoverItemProps = {
    name: string
    icon: ReactNode
} & ComponentPropsWithoutRef<'button'>
export const PopoverItem = ({name, icon, ...rest}: PopoverItemProps) => {
    return (
        <NavButtonWrapper {...rest}>
            {icon}
            <span>{name}</span>
        </NavButtonWrapper>
    )
}
