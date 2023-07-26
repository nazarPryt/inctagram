import React, {Dispatch, FC, ReactNode, SetStateAction, useEffect} from 'react'
import {PopoverContentWrapper, PopoverWrapper} from './Popover.styled'
import {IconButton} from '../IconButton/IconButton'
import {PopOverIcon} from '../../../entities/Post/ui/PostHeader/popOverIcon'

interface PopoverContentProps {
    onActionHandler?: () => void
    children: ReactNode
    setIsPopoverOpen: Dispatch<SetStateAction<boolean>>
    isPopoverOpen: boolean
}

export const Popover: FC<PopoverContentProps> = props => {
    const {onActionHandler, setIsPopoverOpen, isPopoverOpen, children} = props
    const handleTogglePopover = () => {
        setIsPopoverOpen(prevIsOpen => !prevIsOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
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
        <PopoverWrapper id='popoverWrapper'>
            <IconButton active={isPopoverOpen ? 'true' : undefined} onClick={handleTogglePopover}>
                <PopOverIcon />
            </IconButton>
            {isPopoverOpen && <PopoverContentWrapper>{children}</PopoverContentWrapper>}
        </PopoverWrapper>
    )
}
