import React, {ComponentProps, ReactNode} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavIconWrapper} from 'shared/components/NavLink/NavIcon'
import {NavLinkWrapper} from 'shared/components/NavLink/styled'

type DefaultLinkPropsType = ComponentProps<typeof Link>

type NavLinkProps = DefaultLinkPropsType & {
    icon: ReactNode
    name: string
}

export const NavLink = (props: NavLinkProps) => {
    const pathname = usePathname()

    return (
        <NavLinkWrapper {...props} className={pathname === props.href ? 'active' : ''}>
            <NavIconWrapper active={pathname === props.href}>{props.icon}</NavIconWrapper>
            <span>{props.name}</span>
        </NavLinkWrapper>
    )
}
