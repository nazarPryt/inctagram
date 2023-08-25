import {useTranslation} from '../../../../shared/hooks/useTranslation'
import {Modal} from '../../../../shared/ui/Modal/Modal'
import {Button} from '../../../../shared/ui/Button/Button'
import {SaveToDraftWrapper} from './styled'
import {useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {addToDraft} from '../../lib/IndexedDB/indexedDB'

type SaveToDraftType = {
    isNotice: boolean
    handleClose: (isNotice: boolean) => void
    handleDelete: () => void
}

export const CloseOrSaveToDraft = (props: SaveToDraftType) => {
    const {t} = useTranslation()
    const {libraryPictures, describeText} = useAppSelector(state => state.createPost)
    const handleClose = () => {
        props.handleClose(false)
    }

    const handleSaveToDraft = () => {
        if (libraryPictures.length !== 0) {
            addToDraft(libraryPictures)
            props.handleDelete()
        }
    }

    return (
        <Modal title={t.create.saveToDraftModal.title} isOpen={props.isNotice} handleClose={handleClose}>
            <SaveToDraftWrapper>
                <span>{t.create.saveToDraftModal.text}</span>
                <span>{t.create.saveToDraftModal.textNext}</span>
                <div>
                    <Button variant={'outlined'} onClick={props.handleDelete}>
                        {t.create.saveToDraftModal.buttons.discard}
                    </Button>
                    <Button onClick={handleSaveToDraft}>{t.create.saveToDraftModal.buttons.save}</Button>
                </div>
            </SaveToDraftWrapper>
        </Modal>
    )
}
