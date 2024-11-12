import {PATH} from '@/_app/AppSettings/PATH'
import {Notifications} from '@/entities/Notifications'
import {LanguageSelect, MobileLangSelect} from '@/features/LanguageSelect'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {useScreenDetector} from '@/shared/hooks/useScreenDetector'
import {Button} from '@nazar-pryt/inctagram-ui-kit'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import {HeaderStyled} from './Header.styled'

const DynamicBurgerMenu = dynamic(() =>
    import('@/features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)

export const Header = () => {
    const {isMobile} = useScreenDetector()

    return (
        <HeaderStyled>
            <DynamicBurgerMenu className={'BurgerMenu'} />
            <Link className={'logo'} href={'/'}>
                Inctagram
            </Link>
            <ThemeSwitcher />
            <div className={'block'}>
                <Notifications />
                {!isMobile && <LanguageSelect />}
                {isMobile && <MobileLangSelect />}
                {/*{publicMode && (*/}
                {/*    <>*/}
                {/*        <Button asT={Link} href={PATH.LOGIN} variant={'outlined'}>*/}
                {/*            Log In*/}
                {/*        </Button>*/}
                {/*        <Button asT={Link} href={PATH.REGISTRATION}>*/}
                {/*            Sign Up*/}
                {/*        </Button>*/}
                {/*    </>*/}
                {/*)}*/}
            </div>
        </HeaderStyled>
    )
}
