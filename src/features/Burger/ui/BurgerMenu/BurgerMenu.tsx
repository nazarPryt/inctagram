import { ComponentPropsWithoutRef } from 'react'

import Link from 'next/link'

import { LogOutModal } from 'features/Auth/LogOut/ui/LogOutModal/LogOutModal'
import { BurgerButton } from 'features/Burger/ui/BurgerButton/BurgerButton'
import { BurgerMenuStyled, BurgerModalStyled } from 'features/Burger/ui/BurgerMenu/BurgerMenu.styled'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from 'features/Burger/ui/BurgerModal/BurgerModal'
import { CreatePost } from 'features/CreatePost/CreatePost'
import { PATH } from 'shared/constants/PATH'
import { useTranslation } from 'shared/hooks/useTranslation'

export const BurgerMenu = (props: ComponentPropsWithoutRef<'div'>): JSX.Element => {
  const { t } = useTranslation()

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
