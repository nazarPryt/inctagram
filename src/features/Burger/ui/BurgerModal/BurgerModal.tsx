import {ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef} from 'react'

import {
    SheetCloseStyled,
    SheetContentStyled,
    SheetDescriptionStyled,
    SheetFooterStyled,
    SheetHeaderStyled,
    SheetOverlayStyled,
    SheetTitleStyled,
} from '@/features/Burger/ui/BurgerModal/BurgerModal.styled'
import * as SheetPrimitive from '@radix-ui/react-dialog'

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

const SheetContent = forwardRef<ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
    ({children, className, ...props}, ref) => (
        <SheetPortal>
            <SheetOverlay />
            <SheetContentStyled className={className} ref={ref} {...props}>
                {children}
                <SheetCloseStyled asChild>
                    <span></span>
                </SheetCloseStyled>
            </SheetContentStyled>
        </SheetPortal>
    )
)

SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
    <SheetHeaderStyled className={className} {...props} />
)

SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
    <SheetFooterStyled className={className} {...props} />
)

SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef<
    ElementRef<typeof SheetPrimitive.Title>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({className, ...props}, ref) => <SheetTitleStyled className={className} ref={ref} {...props} />)

SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef<
    ElementRef<typeof SheetPrimitive.Description>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({className, ...props}, ref) => <SheetDescriptionStyled className={className} ref={ref} {...props} />)

SheetDescription.displayName = SheetPrimitive.Description.displayName

export {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger}
