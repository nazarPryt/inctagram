import {ComponentPropsWithoutRef} from 'react'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {HeaderStyled} from './Header.styled'
import dynamic from 'next/dynamic'
import {ThemeSwitcher} from 'features/ThemeSwitcher/ThemeSwitcher'
import {LangSelect} from 'shared/ui/LangaugeSelect/LangSelect'
import {Notification} from 'features/Notification/ui/Notification/Notification'

const DynamicBurgerMenu = dynamic(() =>
    import('features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)
export const Header = (props: ComponentPropsWithoutRef<'div'>) => {
    return (
        <HeaderStyled {...props}>
            <DynamicBurgerMenu className={'BurgerMenu'} />
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
