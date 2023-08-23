import React from 'react'
import {HeaderStyled} from 'widgets/Header/Header.styled'
import Link from 'next/link'
import {ThemeSwitcher} from 'features/ThemeSwitcher/ThemeSwitcher'
import {PATH} from 'shared/constants/PATH'
import {Container} from 'shared/ui/Container/Container'
import {LangSelect} from 'shared/ui/LangaugeSelect/LangSelect'
import {BurgerModal} from 'features/Burger/ui/BurgerModal/BurgerModal'
import {Notification} from '../../features/Notification/ui/Notification/Notification'

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <BurgerModal />
                <Link href={PATH.HOME}>Inctagram</Link>
                <ThemeSwitcher />
                <Notification />
                <LangSelect />
            </Container>
        </HeaderStyled>
    )
}
