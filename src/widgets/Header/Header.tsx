import {Notifications} from '@/entities/Notifications'
import {LanguageSelect, MobileLangSelect} from '@/features/LanguageSelect'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {useAuth} from '@/shared/hooks/useAuth'
import {useScreenDetector} from '@/shared/hooks/useScreenDetector'
import {AuthButtons} from '@/widgets/Header/ui/AuthButtons'
import {MobileHeaderPopover} from '@/widgets/Header/ui/MobileHeaderPopover'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {HeaderStyled} from './Header.styled'

const DynamicBurgerMenu = dynamic(() =>
    import('@/features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)

export const Header = () => {
    const {asPath} = useRouter()

    const {isLoggedIn} = useAuth()
    const {isMobile, isTablet} = useScreenDetector()
    const isPublic = asPath === '/'

    return (
        <HeaderStyled>
            {isMobile && isLoggedIn && <DynamicBurgerMenu className={'BurgerMenu'} />}
            <Link className={'logo'} href={'/'}>
                Inctagram
            </Link>
            {!isMobile && <ThemeSwitcher />}
            {!isMobile && (
                <div className={'block'}>
                    {isLoggedIn && !isMobile && <Notifications />}
                    {isTablet || isMobile ? <MobileLangSelect /> : <LanguageSelect />}
                    {isPublic && <AuthButtons />}
                </div>
            )}
            {isMobile && <MobileHeaderPopover isPublic={isPublic} />}
        </HeaderStyled>
    )
}
