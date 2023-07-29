import React, {ChangeEvent, useRef, useState} from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import CreateIcon from '../../shared/assets/icons/create.svg'

import {EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import AvatarEditor from 'react-avatar-editor'
import {EditorPanel} from './ui/EditorPanel/EditorPanel'
import {SelectPhoto} from './ui/SelectPhoto/SelectPhoto'
import {PresetFilters} from './ui/PresetFilters/PresetFilters'
import {createFilteredFile} from './lib/createFilteredFile'
import {EditorButtons} from './ui/EditorButtons/EditorButtons'
import {Describe} from './ui/Describe/Describe'
import {CanvasContainer} from './ui/CanvasContainer/CanvasContainer'
import {useAppDispatch, useAppSelector} from '../../shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '../../_app/store/appSlice'
import {Loader} from '../../shared/ui/Loader/Loader'
import {Modal} from '../../shared/ui/Modal/Modal'
import {NavButton} from '../../widgets/Aside/ui/NavButton/NavButton'
import {EmptyAvatar} from '../../shared/assets/icons/emptyAvatar'
import {StepsType} from './model/types/createPostSchema'
import {createPostAC} from './model/slice/createPostSlice'
import {useCreatePostMutation, useUploadImageMutation} from './service/createPost'

export const CreatePost = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const {previewImage, previewZoom, defaultWidth, defaultHeight} = useAppSelector(state => state.createPost)
    const {step, libraryPictures, uploadId, describeText} = useAppSelector(state => state.createPost)
    const [post, {isLoading: isLoadingImage}] = useUploadImageMutation()
    const [postDescribe, {isLoading: isLoadingPost}] = useCreatePostMutation()
    const editorRef = useRef<AvatarEditor>(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        dispatch(createPostAC.setPreviewImage(url))
        dispatch(createPostAC.setStep('Cropping'))
    }

    const prepareImageToSend = async (img: string, filter: string) => {
        const currImage = libraryPictures.find(el => el.img === img)
        if (editorRef.current && currImage) {
            const file = await createFilteredFile(editorRef, filter)
            dispatch(createPostAC.uploadFile({img, file}))
        } else {
            const file = await createFilteredFile(editorRef, filter)
            dispatch(createPostAC.setLibraryPictures({id: img, img, zoom: '1', filter: '', readyToSend: file}))
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        dispatch(createPostAC.clearAllState())
    }

    const handleChangeStep = (step: StepsType) => {
        if (step === 'Add Photo') {
            dispatch(createPostAC.clearAllState())
            return dispatch(createPostAC.setStep(step))
        }

        if (step === 'Cropping' || step === 'Filters') {
            return dispatch(createPostAC.setStep(step))
        }

        if (step === 'Describe') {
            handleSave()
            return dispatch(createPostAC.setStep(step))
        }

        if (step === 'SENDING') {
            return handleCreatePost()
        }
    }

    const handleSave = async () => {
        for (const image of libraryPictures) {
            const file = image.readyToSend
            if (file) {
                const formData = new FormData()

                formData.append('file', file)

                post(formData)
                    .unwrap()
                    .then(res => {
                        dispatch(createPostAC.setUploadId({uploadId: res.images[0].uploadId}))
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {type: 'success', message: 'Your Picture was successfully uploaded'},
                            })
                        )
                    })

                    .catch(error => {
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {type: 'error', message: error.message},
                            })
                        )
                    })
            }
        }
    }

    const handleCreatePost = () => {
        const postData = {
            description: describeText,
            childrenMetadata: uploadId,
        }
        postDescribe(postData)
            .unwrap()
            .then(() => {
                handleClose()
                dispatch(createPostAC.clearAllState())
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'success', message: 'Your post was successfully uploaded'},
                    })
                )
            })

            .catch(error => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: error.message},
                    })
                )
            })
    }

    return (
        <>
            <NavButton title={t.aside.create} icon={<CreateIcon />} onClick={() => setIsOpen(true)} />

            <Modal title={step} isOpen={isOpen} handleClose={handleClose}>
                <ModalContentWrapper>
                    {(isLoadingImage || isLoadingPost) && <Loader />}
                    {step !== 'Add Photo' && (
                        <EditorButtons isLoading={isLoadingImage} title={step} onChangeStep={handleChangeStep} />
                    )}
                    <EditorWrapper>
                        {previewImage.length ? (
                            <CanvasContainer editorRef={editorRef} prepareImageToSend={prepareImageToSend} />
                        ) : (
                            <EmptyImageWrapper>
                                <EmptyAvatar />
                            </EmptyImageWrapper>
                        )}

                        {step === 'Filters' && <PresetFilters prepareImageToSend={prepareImageToSend} />}
                        {step === 'Describe' && <Describe />}
                        {step === 'Add Photo' && <SelectPhoto handleCreatePost={handleUploadImage} />}
                        {step === 'Cropping' || step === 'Filters' ? (
                            <EditorPanel handleCreatePost={handleUploadImage} />
                        ) : null}
                    </EditorWrapper>
                </ModalContentWrapper>
            </Modal>
        </>
    )
}
