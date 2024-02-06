import {ComponentPropsWithoutRef} from 'react'

import {Notifications} from '@/features/Notifications'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {PATH} from '@/shared/constants/PATH'
import {LangSelect} from '@/shared/ui/LangaugeSelect'
import {Button} from '@nazar-pryt/inctagram-ui-kit'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import {HeaderStyled} from './Header.styled'

const DynamicBurgerMenu = dynamic(() =>
    import('@/features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)

type HeaderType = {
    isLoggedIn: boolean
} & ComponentPropsWithoutRef<'div'>
export const Header = ({isLoggedIn, ...rest}: HeaderType) => {
    return (
        <HeaderStyled {...rest}>
            <DynamicBurgerMenu className={'BurgerMenu'} />
            <Link className={'InctagramLogo'} href={PATH.HOME}>
                Inctagram
            </Link>
            <ThemeSwitcher />
            <div className={'block'}>
                {isLoggedIn && <Notifications />}
                <LangSelect />
                {!isLoggedIn && (
                    <>
                        <Button asT={Link} href={PATH.LOGIN} variant={'outlined'}>
                            Log In
                        </Button>
                        <Button asT={Link} href={PATH.REGISTRATION}>
                            Sign Up
                        </Button>
                    </>
                )}
            </div>
        </HeaderStyled>
    )
}
