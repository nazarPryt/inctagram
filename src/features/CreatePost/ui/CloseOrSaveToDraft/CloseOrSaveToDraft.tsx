import { addToDraft, clearIndexedDB } from '../../lib/IndexedDB/indexedDB'

import { SaveToDraftWrapper } from './styled'

import { useAppSelector } from 'shared/hooks/reduxHooks'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

type SaveToDraftType = {
  isNotice: boolean
  handleClose: (isNotice: boolean) => void
  handleDelete: () => void
}

export const CloseOrSaveToDraft = ({ handleClose, handleDelete, isNotice }: SaveToDraftType): JSX.Element => {
  const { t } = useTranslation()
  const { libraryPictures, describeText } = useAppSelector(state => state.createPost)
  const handlerClose = (): void => {
    handleClose(false)
  }

  const handleSaveToDraft = async (): Promise<void> => {
    if (libraryPictures.length !== 0) {
      await clearIndexedDB('draftImages')
      await addToDraft(libraryPictures, describeText)
      handleDelete()
    }
  }

  const refusalToSave = async (): Promise<void> => {
    handleDelete()
    await clearIndexedDB('draftImages')
  }

  return (
    <Modal handleClose={handlerClose} isOpen={isNotice} title={t.create.saveToDraftModal.title}>
      <SaveToDraftWrapper>
        <span>{t.create.saveToDraftModal.text}</span>
        <span>{t.create.saveToDraftModal.textNext}</span>
        <div>
          <Button variant="outlined" onClick={refusalToSave}>
            {t.create.saveToDraftModal.buttons.discard}
          </Button>
          <Button onClick={handleSaveToDraft}>{t.create.saveToDraftModal.buttons.save}</Button>
        </div>
      </SaveToDraftWrapper>
    </Modal>
  )
}
