import React from 'react'

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
import {Burger} from 'features/Burger/ui/Burger/Burger'
import {Aside} from 'widgets/Aside/Aside'
import {BurgerMenu} from 'features/Burger/ui/BurgerMenu/BurgerMenu'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({className, ...props}: SheetPrimitive.DialogPortalProps) => (
    <SheetPrimitive.Portal className={className} {...props} />
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => <SheetOverlayStyled className={className} {...props} ref={ref} />)
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
    ({className, children, ...props}, ref) => (
        <SheetPortal>
            <SheetOverlay />
            <SheetContentStyled ref={ref} className={className} {...props}>
                {children}
                <SheetCloseStyled>
                    <span>Close</span>
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

const SheetTitle = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({className, ...props}, ref) => <SheetTitleStyled ref={ref} className={className} {...props} />)
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({className, ...props}, ref) => <SheetDescriptionStyled ref={ref} className={className} {...props} />)
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription}

export function BurgerModal() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Burger />
            </SheetTrigger>
            <SheetContent>
                <BurgerMenu />

                {/*<SheetFooter>*/}
                {/*    <SheetClose asChild>*/}
                {/*        <button type='submit'>logout</button>*/}
                {/*    </SheetClose>*/}
                {/*</SheetFooter>*/}
            </SheetContent>
        </Sheet>
    )
}
