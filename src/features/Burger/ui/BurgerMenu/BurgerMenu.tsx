import {ComponentPropsWithoutRef} from 'react'
import {BurgerMenuStyled, BurgerModalStyled} from 'features/Burger/ui/BurgerMenu/BurgerMenu.styled'
import {useTranslation} from 'shared/hooks/useTranslation'
import {BurgerButton} from 'features/Burger/ui/BurgerButton/BurgerButton'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {CreatePost} from 'features/CreatePost/CreatePost'
import {LogOutModal} from 'features/Auth/LogOut/ui/LogOutModal/LogOutModal'
import {Sheet, SheetClose, SheetContent, SheetTrigger} from 'features/Burger/ui/BurgerModal/BurgerModal'

export function BurgerMenu(props: ComponentPropsWithoutRef<'div'>) {
    const {t} = useTranslation()
    return (
        <BurgerModalStyled {...props}>
            <Sheet>
                <SheetTrigger asChild>
                    <BurgerButton />
                </SheetTrigger>
                <SheetContent>
                    <BurgerMenuStyled>
                        <SheetClose asChild>
                            <Link href={PATH.HOME}>{t.aside.home}</Link>
                        </SheetClose>
                        <CreatePost />
                        <SheetClose asChild>
                            <Link href={PATH.MY_PROFILE}>{t.aside.myProfile}</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={PATH.MESSENGER}>{t.aside.messenger}</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={PATH.SEARCH}>{t.aside.search}</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={PATH.STATISTICS}>{t.aside.statistics}</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={PATH.FAVORITES}>{t.aside.favorites}</Link>
                        </SheetClose>
                        <LogOutModal />
                    </BurgerMenuStyled>
                </SheetContent>
            </Sheet>
        </BurgerModalStyled>
    )
}
