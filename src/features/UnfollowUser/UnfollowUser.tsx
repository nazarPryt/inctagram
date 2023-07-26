import React from 'react'
import {IconButton} from 'shared/components/IconButton/IconButton'
import {UnfollowUserIcon} from './UnfollowUserIcon'

type UnfollowUserProps = {
    changeHandler?: () => void
}
export const UnfollowUser = ({changeHandler}: UnfollowUserProps) => {
    return (
        <IconButton onClick={changeHandler}>
            <UnfollowUserIcon />
        </IconButton>
    )
}
