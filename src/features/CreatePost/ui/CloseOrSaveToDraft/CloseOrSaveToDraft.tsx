import {useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {useTranslation} from '../../../../shared/hooks/useTranslation'
import {Button} from '../../../../shared/ui/Button/Button'
import {Modal} from '../../../../shared/ui/Modal/Modal'
import {addToDraft, clearIndexedDB} from '../../lib/IndexedDB/indexedDB'
import {SaveToDraftWrapper} from './styled'

type SaveToDraftType = {
    handleClose: (isNotice: boolean) => void
    handleDelete: () => void
    isNotice: boolean
}

export const CloseOrSaveToDraft = (props: SaveToDraftType) => {
    const {t} = useTranslation()
    const {describeText, libraryPictures} = useAppSelector(state => state.createPost)
    const handleClose = () => {
        props.handleClose(false)
    }

    const handleSaveToDraft = async () => {
        if (libraryPictures.length !== 0) {
            await clearIndexedDB('draftImages')
            await addToDraft(libraryPictures, describeText)
            props.handleDelete()
        }
    }

    const refusalToSave = async () => {
        props.handleDelete()
        await clearIndexedDB('draftImages')
    }

    return (
        <Modal handleClose={handleClose} isOpen={props.isNotice} title={t.create.saveToDraftModal.title}>
            <SaveToDraftWrapper>
                <span>{t.create.saveToDraftModal.text}</span>
                <span>{t.create.saveToDraftModal.textNext}</span>
                <div>
                    <Button onClick={refusalToSave} variant={'outlined'}>
                        {t.create.saveToDraftModal.buttons.discard}
                    </Button>
                    <Button onClick={handleSaveToDraft}>{t.create.saveToDraftModal.buttons.save}</Button>
                </div>
            </SaveToDraftWrapper>
        </Modal>
    )
}
