import {ComponentPropsWithoutRef} from 'react'

import {Notifications} from '@/features/Notifications'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {PATH} from '@/shared/constants/PATH'
import {Button} from '@nazar-pryt/inctagram-ui-kit'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import {LangSelect} from '../../features/LangaugeSelect'
import {HeaderStyled} from './Header.styled'

const DynamicBurgerMenu = dynamic(() =>
    import('@/features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)

type HeaderType = {
    isLoggedIn: boolean
    publicMode?: boolean
} & ComponentPropsWithoutRef<'div'>
export const Header = ({isLoggedIn = false, publicMode = false, ...rest}: HeaderType) => {
    return (
        <HeaderStyled {...rest}>
            {!publicMode && <DynamicBurgerMenu className={'BurgerMenu'} />}
            <Link className={'InctagramLogo'} href={'/'}>
                Inctagram
            </Link>
            <ThemeSwitcher />
            <div className={'block'}>
                {isLoggedIn && <Notifications />}
                <LangSelect />
                {publicMode && (
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
