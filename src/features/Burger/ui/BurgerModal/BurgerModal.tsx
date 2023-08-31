import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react'

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

const Sheet = SheetPrimitive.Root
const SheetClose = SheetPrimitive.Close

const SheetTrigger = SheetPrimitive.Trigger

const SheetPortal = ({ className, ...props }: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal className={className} {...props} />
)

SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = forwardRef<
  ElementRef<typeof SheetPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => <SheetOverlayStyled className={className} {...props} ref={ref} />)

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

interface SheetContentProps extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {}

const SheetContent = forwardRef<ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetContentStyled ref={ref} className={className} {...props}>
        {children}
        <SheetCloseStyled asChild>
          <span />
        </SheetCloseStyled>
      </SheetContentStyled>
    </SheetPortal>
  )
)

SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <SheetHeaderStyled className={className} {...props} />
)

SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <SheetFooterStyled className={className} {...props} />
)

SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef<
  ElementRef<typeof SheetPrimitive.Title>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => <SheetTitleStyled ref={ref} className={className} {...props} />)

SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef<
  ElementRef<typeof SheetPrimitive.Description>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => <SheetDescriptionStyled ref={ref} className={className} {...props} />)

SheetDescription.displayName = SheetPrimitive.Description.displayName

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
