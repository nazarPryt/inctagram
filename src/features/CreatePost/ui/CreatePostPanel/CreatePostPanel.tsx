import { ChangeEvent } from 'react'

import { getAllDrafts } from '../../lib/IndexedDB/indexedDB'
import { createPostAC } from '../../model/slice/createPostSlice'
import { LibraryPictureType } from '../../model/types/createPostSchema'
import { SelectPhoto } from '../SelectPhoto/SelectPhoto'

import { CreatePostPanelWrapper } from './styled'

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'

type PropsType = {
  handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
  hasData: boolean
}

export const CreatePostPanel = ({ hasData, handleCreatePost }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()
  const { step } = useAppSelector(state => state.createPost)
  const { t } = useTranslation()

  const openDraft = async (): Promise<void> => {
    const [userDraft] = await getAllDrafts()
    const array: LibraryPictureType[] = userDraft.drafts.map((el, i) => {
      if (el.readyToSend !== null) {
        return { ...el, img: URL.createObjectURL(el.readyToSend) }
      }

      return {
        img: el.img,
        id: el.id,
        zoom: el.zoom,
        filter: el.filter,
        readyToSend: null,
        width: el.width,
        height: el.height,
      }
    })

    if (array.length > 0) {
      dispatch(createPostAC.setLibraryFromDraft(array))
      dispatch(createPostAC.setDescribeText(userDraft.description))
    }

    dispatch(createPostAC.setStep(t.create.steps.cropping))
  }

  return (
    <CreatePostPanelWrapper>
      {step === t.create.steps.addPhoto && (
        <div>
          <SelectPhoto handleCreatePost={handleCreatePost} />
          {hasData && (
            <Button variant="outlined" onClick={openDraft}>
              Open Draft
            </Button>
          )}
        </div>
      )}
    </CreatePostPanelWrapper>
  )
}
