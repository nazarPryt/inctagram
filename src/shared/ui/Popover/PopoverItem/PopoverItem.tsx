import React, {ComponentProps, ComponentPropsWithoutRef, ReactNode, forwardRef} from 'react'

import {InputText} from 'shared/ui/InputText/InputText'
import {NavButtonWrapper} from 'widgets/Aside/ui/NavButton/NavButton.styled'

type PopoverItemProps = {
    icon: ReactNode
    name: string
} & ComponentProps<'button'>

export const PopoverItem = forwardRef<HTMLButtonElement, PopoverItemProps>((props, ref) => {
    return (
        <NavButtonWrapper ref={ref} {...props} onClick={props.onClick}>
            {props.icon}
            <span>{props.name}</span>
        </NavButtonWrapper>
    )
})

PopoverItem.displayName = 'PopoverItem'
