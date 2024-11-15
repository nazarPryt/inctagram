import {useScreenDetector} from '@/shared/hooks/useScreenDetector'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Dialog} from '@nazar-pryt/inctagram-ui-kit'

import {useReportPostForm} from '../hook/useReportPostForm'

type ReportPostDialogType = {
    handleCloseReportPostDialog: () => void
    handleReportPost: (reportReason: string) => void
    loading: boolean
    reportPostDialog: boolean
    userName: string
}
export const ReportPostDialog = ({
    handleCloseReportPostDialog,
    handleReportPost,
    loading,
    reportPostDialog,
    userName,
}: ReportPostDialogType) => {
    const {t} = useTranslation()
    const {isMobile} = useScreenDetector()

    const {renderReportPostForm, submitReportPostForm} = useReportPostForm({handleReportPost, userName})

    return (
        <Dialog
            cancelButtonText={t.common.no}
            confirmButtonText={t.common.yes}
            disabled={loading}
            invertButtons
            onCancelButtonClick={handleCloseReportPostDialog}
            onClose={handleCloseReportPostDialog}
            onConfirmButtonClick={submitReportPostForm}
            open={reportPostDialog}
            size={isMobile ? 'sm' : 'md'}
            title={t.feature.post.report.title}
        >
            {renderReportPostForm()}
        </Dialog>
    )
}
