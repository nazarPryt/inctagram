import { ComponentPropsWithoutRef, Dispatch, FC, ReactNode, SetStateAction, useEffect } from 'react'

import { IconButton } from '../IconButton/IconButton'

import { PopoverContentWrapper, PopoverWrapper } from './Popover.styled'

type PopoverContentProps = ComponentPropsWithoutRef<'div'> & {
  onActionHandler?: () => void
  children: ReactNode
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>
  isPopoverOpen: boolean
  icon: ReactNode
}

export const Popover: FC<PopoverContentProps> = props => {
  const { setIsPopoverOpen, icon, isPopoverOpen, children, ...rest } = props
  const handleTogglePopover = (): void => {
    setIsPopoverOpen(prevIsOpen => !prevIsOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const popoverWrapper = document.getElementById('popoverWrapper')

      if (popoverWrapper && !popoverWrapper.contains(event.target as Node)) {
        setIsPopoverOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsPopoverOpen])

  return (
    <PopoverWrapper {...rest} id="popoverWrapper">
      <IconButton active={isPopoverOpen} onClick={handleTogglePopover}>
        {icon}
      </IconButton>
      {isPopoverOpen && <PopoverContentWrapper>{children}</PopoverContentWrapper>}
    </PopoverWrapper>
  )
}
