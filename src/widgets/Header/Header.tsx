import React from 'react'
import {HeaderStyled} from 'widgets/Header/Header.styled'
import Link from 'next/link'
import {ThemeSwitcher} from 'features/ThemeSwitcher/ThemeSwitcher'
import {PATH} from 'shared/constants/PATH'
import {Container} from 'shared/ui/Container/Container'
import {LangSelect} from 'shared/ui/LangaugeSelect/LangSelect'
import {BurgerMenu} from 'features/Burger/ui/BurgerMenu/BurgerMenu'

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <BurgerMenu className={'BurgerMenu'} />
                <Link className={'InctagramLogo'} href={PATH.HOME}>
                    Inctagram
                </Link>
                <ThemeSwitcher />
                <LangSelect />
            </Container>
        </HeaderStyled>
    )
}
