import {SelectPhoto} from '../SelectPhoto/SelectPhoto'
import {Button} from '../../../../shared/ui/Button/Button'
import React, {ChangeEvent} from 'react'
import {useTranslation} from '../../../../shared/hooks/useTranslation'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {CreatePostPanelWrapper} from './styled'
import {getAllDrafts} from '../../lib/IndexedDB/indexedDB'
import {LibraryPictureType} from '../../model/types/createPostSchema'

export const CreatePostPanel = () => {
    const dispatch = useAppDispatch()
    const {step, libraryPictures} = useAppSelector(state => state.createPost)
    const {t} = useTranslation()

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        dispatch(createPostAC.setPreviewImage(url))
        dispatch(createPostAC.setStep(t.create.steps.cropping))
    }

    // const openDraft = async () => {
    //     const [userDraft] = await getAllDrafts()
    //     const array = userDraft.drafts.map((el, i) => {
    //         if (el.readyToSend !== null) {
    //             // dispatch(createPostAC.setLibraryPictures({...el, img: URL.createObjectURL(el.readyToSend)}))
    //             // dispatch(createPostAC.setPreviewImage(URL.createObjectURL(el.readyToSend)))
    //             return {...el, img: URL.createObjectURL(el.readyToSend)}
    //         } else return null
    //     })
    //     if (array !== null) {
    //         dispatch(createPostAC.setLibraryFromDraft(array))
    //     }
    //     // dispatch(createPostAC.setPreviewImage(array[0]!.img))
    //
    //     dispatch(createPostAC.setStep(t.create.steps.cropping))
    // }

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
                }
            }
        })

        if (array.length > 0) {
            dispatch(createPostAC.setLibraryFromDraft(array))
        }

        dispatch(createPostAC.setStep(t.create.steps.cropping))
    }

    return (
        <CreatePostPanelWrapper>
            {step === t.create.steps.addPhoto && (
                <div>
                    <SelectPhoto handleCreatePost={handleUploadImage} />
                    <Button variant={'outlined'} onClick={openDraft}>
                        Open Draft
                    </Button>
                </div>
            )}
        </CreatePostPanelWrapper>
    )
}
