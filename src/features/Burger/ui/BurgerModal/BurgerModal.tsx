import React, {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import {
    SheetCloseStyled,
    SheetContentStyled,
    SheetDescriptionStyled,
    SheetFooterStyled,
    SheetHeaderStyled,
    SheetOverlayStyled,
    SheetTitleStyled,
} from 'features/Burger/ui/BurgerModal/BurgerModal.styled'
import {BurgerButton} from 'features/Burger/ui/BurgerButton/BurgerButton'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {CreatePost} from 'features/CreatePost/CreatePost'
import {LogOutModal} from 'features/Auth/LogOut/ui/LogOutModal/LogOutModal'
import {useTranslation} from 'shared/hooks/useTranslation'
import {BurgerMenuStyled} from 'features/Burger/ui/BurgerMenu/BurgerMenu.styled'
import styled from 'styled-components'

const Sheet = SheetPrimitive.Root
const SheetClose = SheetPrimitive.Close

const SheetTrigger = SheetPrimitive.Trigger

const SheetPortal = ({className, ...props}: SheetPrimitive.DialogPortalProps) => (
    <SheetPrimitive.Portal className={className} {...props} />
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = forwardRef<
    ElementRef<typeof SheetPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => <SheetOverlayStyled className={className} {...props} ref={ref} />)
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

interface SheetContentProps extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {}

const SheetContent = forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
    ({className, children, ...props}, ref) => (
        <SheetPortal>
            <SheetOverlay />
            <SheetContentStyled ref={ref} className={className} {...props}>
                {children}
                <SheetCloseStyled asChild>
                    <span></span>
                </SheetCloseStyled>
            </SheetContentStyled>
        </SheetPortal>
    )
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <SheetHeaderStyled className={className} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <SheetFooterStyled className={className} {...props} />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef<
    ElementRef<typeof SheetPrimitive.Title>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({className, ...props}, ref) => <SheetTitleStyled ref={ref} className={className} {...props} />)
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef<
    ElementRef<typeof SheetPrimitive.Description>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({className, ...props}, ref) => <SheetDescriptionStyled ref={ref} className={className} {...props} />)
SheetDescription.displayName = SheetPrimitive.Description.displayName

export function BurgerModal(props: ComponentPropsWithoutRef<'div'>) {
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
export const BurgerModalStyled = styled.div``
