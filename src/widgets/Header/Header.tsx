import { ComponentPropsWithoutRef } from 'react'

import Link from 'next/link'

import { BurgerMenu } from 'features/Burger/ui/BurgerMenu/BurgerMenu'
import { Notification } from 'features/Notification/ui/Notification/Notification'
import { ThemeSwitcher } from 'features/ThemeSwitcher/ThemeSwitcher'
import { PATH } from 'shared/constants/PATH'
import { LangSelect } from 'shared/ui/LangaugeSelect/LangSelect'
import { HeaderStyled } from 'widgets/Header/Header.styled'

export const Header = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <HeaderStyled {...props}>
      <BurgerMenu className="BurgerMenu" />
      <Link className="InctagramLogo" href={PATH.HOME}>
        Inctagram
      </Link>
      <ThemeSwitcher />
      <div className="block">
        <Notification />
        <LangSelect />
      </div>
    </HeaderStyled>
  )
}
