'use client'
import React from 'react'
import {HeaderStyled} from './Header.styled'
import Link from 'next/link'
import {Container} from '../Container/Container'
import {ThemeSwitcher} from '../ThemeSwitcher/ThemeSwitcher'
import {LogOut} from '../LogOut/LogOut'

import {useSession} from 'next-auth/react'
import {PATH} from 'common/constant/PATH'

export const Header = () => {
    const {status} = useSession()

    return (
        <HeaderStyled>
            <Container>
                <Link href={PATH.HOME}>Inctagram</Link>
                <ThemeSwitcher />
                {status === 'authenticated' ? <LogOut /> : null}
            </Container>
        </HeaderStyled>
    )
}
