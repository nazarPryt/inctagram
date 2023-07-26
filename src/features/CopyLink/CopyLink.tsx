import React from 'react'
import {IconButton} from 'shared/components/IconButton/IconButton'
import {CopyLinkIcon} from './CopyLinkIcon'

type CopyLinkProps = {
    changeHandler?: () => void
}
export const CopyLink = ({changeHandler}: CopyLinkProps) => {
    return (
        <IconButton onClick={changeHandler}>
            <CopyLinkIcon />
        </IconButton>
    )
}
