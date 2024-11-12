import {PATH} from '@/_app/AppSettings/PATH'
import {Notifications} from '@/entities/Notifications'
import {LanguageSelect} from '@/features/LanguageSelect'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {Button} from '@nazar-pryt/inctagram-ui-kit'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import {MobileHeaderStyled} from './MobileHeader.styled'

const DynamicBurgerMenu = dynamic(() =>
    import('@/features/Burger/ui/BurgerMenu/BurgerMenu').then(module => module.BurgerMenu)
)

export const MobileHeader = () => {
    return (
        <MobileHeaderStyled>
            <DynamicBurgerMenu className={'BurgerMenu'} />
            <Link className={'logo'} href={'/public'}>
                Inctagram
            </Link>
            <ThemeSwitcher />
            <div className={'block'}>
                <Notifications />
                <LanguageSelect />
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
        </MobileHeaderStyled>
    )
}
