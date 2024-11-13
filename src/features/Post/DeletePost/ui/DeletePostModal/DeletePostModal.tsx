import {useTranslation} from '@/shared/hooks/useTranslation'
import {Dialog} from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
    handleDeletePost: () => void
    handleModalClose: () => void
    isOpen: boolean
}
export const DeletePostModal = ({handleDeletePost, handleModalClose, isOpen}: PropsType) => {
    const {t} = useTranslation()

    return (
        <Dialog
            cancelButtonText={t.myPost.modal.btn2}
            confirmButtonText={t.myPost.modal.btn1}
            onClose={handleModalClose}
            onConfirmButtonClick={handleDeletePost}
            open={isOpen}
            size={'sm'}
            title={t.myPost.modal.title}
        >
            <p>{t.myPost.modal.description}</p>
        </Dialog>
    )
}
