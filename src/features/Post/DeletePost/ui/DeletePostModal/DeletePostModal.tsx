import {useTranslation} from '@/shared/hooks/useTranslation'
import {Modal} from '@/shared/ui/Modal/Modal'
import {Button} from '@nazar-pryt/inctagram-ui-kit'

import {DeletePostModalWrapper} from './DeletePostModal.styled'

type PropsType = {
    handleDeletePost: () => void
    handleModalClose: () => void
    isOpen: boolean
}
export const DeletePostModal = ({handleDeletePost, handleModalClose, isOpen}: PropsType) => {
    const {t} = useTranslation()

    return (
        <Modal handleClose={handleModalClose} isOpen={isOpen} title={t.myPost.modal.title}>
            <DeletePostModalWrapper>
                <p>{t.myPost.modal.description}</p>
                <div className={'buttonsWrapper'}>
                    <Button onClick={handleDeletePost} variant={'outlined'}>
                        {t.myPost.modal.btn1}
                    </Button>
                    <Button onClick={handleModalClose}>{t.myPost.modal.btn2}</Button>
                </div>
            </DeletePostModalWrapper>
        </Modal>
    )
}
