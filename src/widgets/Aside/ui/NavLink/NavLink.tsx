import { ComponentProps, ReactNode } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavIconWrapper, NavLinkWrapper } from 'widgets/Aside/ui/NavLink/NavLink.styled'

type DefaultLinkPropsType = ComponentProps<typeof Link>

type NavLinkProps = DefaultLinkPropsType & {
  icon: ReactNode
  name: string
}

export const NavLink = (props: NavLinkProps) => {
  const pathname = usePathname()

  return (
    // TODO
    // eslint-disable-next-line react/destructuring-assignment
    <NavLinkWrapper {...props} className={pathname === props.href ? 'active' : ''}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <NavIconWrapper active={pathname === props.href}>{props.icon}</NavIconWrapper>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.name}
    </NavLinkWrapper>
  )
}
