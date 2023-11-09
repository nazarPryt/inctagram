import React, {ComponentPropsWithoutRef, Dispatch, FC, ReactNode, SetStateAction, useEffect} from 'react'
import {PopoverContentWrapper, PopoverWrapper} from './Popover.styled'
import {IconButton} from '../IconButton/IconButton'

type PopoverContentProps = {
    onActionHandler?: () => void
    children: ReactNode
    setIsPopoverOpen: Dispatch<SetStateAction<boolean>>
    isPopoverOpen: boolean
    icon: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Popover: FC<PopoverContentProps> = props => {
    const {onActionHandler, setIsPopoverOpen, icon, isPopoverOpen, children, ...rest} = props
    const handleTogglePopover = () => {
        setIsPopoverOpen(prevIsOpen => !prevIsOpen)
    }

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         const popoverWrapper = document.getElementById('popoverWrapper')
    //
    //         if (popoverWrapper && !popoverWrapper.contains(event.target as Node)) {
    //             setIsPopoverOpen(false)
    //         }
    //     }
    //
    //     document.addEventListener('mousedown', handleClickOutside)
    //
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside)
    //     }
    // }, [setIsPopoverOpen])

    return (
        <PopoverWrapper {...rest} id='popoverWrapper'>
            <IconButton active={isPopoverOpen} onClick={handleTogglePopover}>
                {icon}
            </IconButton>
            {isPopoverOpen && <PopoverContentWrapper>{children}</PopoverContentWrapper>}
        </PopoverWrapper>
    )
}
