'use client'
import React from 'react'
import {HeaderStyled} from 'widgets/Header/Header.styled'
import Link from 'next/link'
import {ThemeSwitcher} from 'features/ThemeSwitcher/ThemeSwitcher'
import {LogOut} from 'features/LogOut/LogOut'
import {PATH} from 'shared/constants/PATH'
import {Container} from '../../shared/ui/Container/Container'
import {useSession} from 'next-auth/react'
import {LangSelect} from '../../shared/ui/LangaugeSelect/LangSelect'

export const Header = () => {
    const {status} = useSession()
    return (
        <HeaderStyled>
            <Container>
                <Link href={PATH.HOME}>Inctagram</Link>
                <ThemeSwitcher />
                {status === 'authenticated' ? <LogOut /> : null}
                <LangSelect />
            </Container>
        </HeaderStyled>
    )
}
