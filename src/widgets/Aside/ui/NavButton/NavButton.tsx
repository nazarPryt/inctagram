import React, {ComponentProps, ReactNode} from 'react'
import {NavButtonWrapper} from 'widgets/Aside/ui/NavButton/NavButton.styled'

type NavButtonType = {
    title: string
    icon: ReactNode
} & ComponentProps<'button'>

export const NavButton = ({title, icon, ...rest}: NavButtonType) => {
    return (
        <NavButtonWrapper {...rest}>
            {icon}
            {title}
        </NavButtonWrapper>
    )
}
