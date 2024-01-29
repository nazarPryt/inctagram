import {ComponentPropsWithoutRef} from 'react'

import {BurgerMenu} from '@/features/Burger/ui/BurgerMenu/BurgerMenu'
import {PATH} from '@/shared/constants/PATH'
import {LangSelect} from '@/shared/ui/LangaugeSelect/LangSelect'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import {HeaderStyled} from './Header.styled'

const DynamicBurgerMenu = dynamic(() =>
    import('@/features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)

export const Header = (props: ComponentPropsWithoutRef<'div'>) => {
    return (
        <HeaderStyled {...props}>
            <BurgerMenu className={'BurgerMenu'} />
            <Link className={'InctagramLogo'} href={PATH.HOME}>
                Inctagram
            </Link>
            {/*<ThemeSwitcher />*/}
            <div className={'block'}>
                {/*<Notification />*/}
                <LangSelect />
            </div>
        </HeaderStyled>
    )
}
