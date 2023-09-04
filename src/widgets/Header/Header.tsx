import React, {ComponentPropsWithoutRef} from 'react'
import {HeaderStyled} from 'widgets/Header/Header.styled'
import Link from 'next/link'
import {ThemeSwitcher} from 'features/ThemeSwitcher/ThemeSwitcher'
import {PATH} from 'shared/constants/PATH'
import {LangSelect} from 'shared/ui/LangaugeSelect/LangSelect'
import {BurgerMenu} from 'features/Burger/ui/BurgerMenu/BurgerMenu'
import {Notification} from 'features/Notification/ui/Notification/Notification'

export const Header = (props: ComponentPropsWithoutRef<'div'>) => {
    return (
        <HeaderStyled {...props}>
            <BurgerMenu className={'BurgerMenu'} />
            <Link className={'InctagramLogo'} href={PATH.HOME}>
                Inctagram
            </Link>
            <ThemeSwitcher />
            <div className='block'>
                <Notification />
                <LangSelect />
            </div>
        </HeaderStyled>
    )
}
