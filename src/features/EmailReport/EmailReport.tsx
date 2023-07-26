import React from 'react'
import {IconButton} from 'shared/components/IconButton/IconButton'
import {EmailReportIcon} from './EmailReportIcon'

type EmailReportProps = {
    changeHandler?: () => void
}
export const EmailReport = ({changeHandler}: EmailReportProps) => {
    return (
        <IconButton onClick={changeHandler}>
            <EmailReportIcon />
        </IconButton>
    )
}
