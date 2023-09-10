import {SelectPhoto} from '../SelectPhoto/SelectPhoto'
import {Button} from '../../../../shared/ui/Button/Button'
import React, {ChangeEvent} from 'react'
import {useTranslation} from '../../../../shared/hooks/useTranslation'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {CreatePostPanelWrapper} from './styled'
import {getAllDrafts} from '../../lib/IndexedDB/indexedDB'
import {LibraryPictureType} from '../../model/types/createPostSchema'

type PropsType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
    hasData: boolean
}

export const CreatePostPanel = ({hasData, handleCreatePost}: PropsType) => {
    const dispatch = useAppDispatch()
    const {step} = useAppSelector(state => state.createPost)
    const {t} = useTranslation()

    const openDraft = async () => {
        const [userDraft] = await getAllDrafts()
        const array: LibraryPictureType[] = userDraft.drafts.map((el, i) => {
            if (el.readyToSend !== null) {
                return {...el, img: URL.createObjectURL(el.readyToSend)}
            } else {
                return {
                    img: el.img,
                    id: el.id,
                    zoom: el.zoom,
                    filter: el.filter,
                    readyToSend: null,
                    width: el.width,
                    height: el.height,
                }
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
                        <Button variant={'outlined'} onClick={openDraft}>
                            Open Draft
                        </Button>
                    )}
                </div>
            )}
        </CreatePostPanelWrapper>
    )
}
