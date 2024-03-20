import React, {ChangeEvent} from 'react'

import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button} from '@nazar-pryt/inctagram-ui-kit'

import {clearIndexedDB, getAllDrafts} from '../../lib/IndexedDB/indexedDB'
import {createPostAC} from '../../model/slice/createPostSlice'
import {LibraryPictureType} from '../../model/types/createPostSchema'
import {SelectPhoto} from '../SelectPhoto/SelectPhoto'
import {CreatePostPanelWrapper} from './styled'

type PropsType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
    hasData: boolean
}

export const CreatePostPanel = ({handleCreatePost, hasData}: PropsType) => {
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
                    filter: el.filter,
                    height: el.height,
                    id: el.id,
                    img: el.img,
                    readyToSend: null,
                    width: el.width,
                    zoom: el.zoom,
                }
            }
        })

        if (array.length > 0) {
            dispatch(createPostAC.setLibraryFromDraft(array))
            dispatch(createPostAC.setDescribeText(userDraft.description))
        }

        dispatch(createPostAC.setStep(t.create.steps.cropping))
        await clearIndexedDB('draftImages')
    }

    return (
        <CreatePostPanelWrapper>
            {step === t.create.steps.addPhoto && (
                <div>
                    <SelectPhoto handleCreatePost={handleCreatePost} />
                    {hasData && (
                        <Button onClick={openDraft} variant={'outlined'}>
                            Open Draft
                        </Button>
                    )}
                </div>
            )}
        </CreatePostPanelWrapper>
    )
}
