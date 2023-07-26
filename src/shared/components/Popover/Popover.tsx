import React, {Dispatch, FC, ReactNode, SetStateAction} from 'react'
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

    return (
        <PopoverWrapper>
            <IconButton onClick={handleTogglePopover}>
                <PopOverIcon />
            </IconButton>
            {isPopoverOpen && <PopoverContentWrapper>{children}</PopoverContentWrapper>}
        </PopoverWrapper>
    )
}
