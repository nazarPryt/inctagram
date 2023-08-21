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
import {BurgerMenu} from 'features/Burger/ui/BurgerMenu/BurgerMenu'
import {BurgerButton} from 'features/Burger/ui/BurgerButton/BurgerButton'

const Sheet = SheetPrimitive.Root

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
                <SheetCloseStyled>
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

export function BurgerModal() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <BurgerButton />
            </SheetTrigger>
            <SheetContent>
                <BurgerMenu />
            </SheetContent>
        </Sheet>
    )
}
