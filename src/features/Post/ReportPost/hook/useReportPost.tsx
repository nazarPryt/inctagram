import {Dispatch, SetStateAction, useState} from 'react'
import {toast} from 'react-toastify'

import {useTranslation} from '@/shared/hooks/useTranslation'

import {ReportPostDialog} from '../ui/ReportPostDialog'

type useReportPostType = {
    setPopover?: Dispatch<SetStateAction<boolean>>
    userName: string
}

export const useReportPost = ({setPopover, userName}: useReportPostType) => {
    const {t} = useTranslation()
    const [banDialog, setBanDialog] = useState(false)

    const handleOpenReportPostDialog = () => {
        setBanDialog(true)
    }
    const handleCloseReportPostDialog = () => {
        setBanDialog(false)
    }
    const handleReportPost = async (reportReason: string) => {
        try {
            toast(t.feature.post.report.success(userName, reportReason), {type: 'success'})
        } catch (e) {
            toast(`cant do it`, {type: 'error'})
        } finally {
            setBanDialog(false)
            setPopover && setPopover(false)
        }
    }

    const renderReportPostDialog = () => {
        return (
            <ReportPostDialog
                handleCloseReportPostDialog={handleCloseReportPostDialog}
                handleReportPost={handleReportPost}
                loading={false}
                reportPostDialog={banDialog}
                userName={userName}
            />
        )
    }

    return {
        handleOpenReportPostDialog,
        renderReportPostDialog,
    }
}
