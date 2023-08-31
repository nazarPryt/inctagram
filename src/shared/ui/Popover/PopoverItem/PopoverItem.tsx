import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { NavButtonWrapper } from 'widgets/Aside/ui/NavButton/NavButton.styled'

type PopoverItemProps = ComponentPropsWithoutRef<'button'> & {
  name: string
  icon: ReactNode
}
export const PopoverItem = ({ name, icon, ...rest }: PopoverItemProps): JSX.Element => {
  return (
    <NavButtonWrapper {...rest}>
      {icon}
      <span>{name}</span>
    </NavButtonWrapper>
  )
}
