import {ComponentProps, forwardRef, ReactNode} from 'react'
import {NavButtonWrapper} from 'widgets/Aside/ui/NavButton/NavButton.styled'

type NavButtonType = ComponentProps<'button'> & {
    title: string
    icon: ReactNode
}

export const NavButton = forwardRef<HTMLButtonElement, NavButtonType>((props, ref) => {
    return (
        <NavButtonWrapper ref={ref} {...props}>
            {props.icon}
            {props.title}
        </NavButtonWrapper>
    )
})
NavButton.displayName = 'NavButton'
