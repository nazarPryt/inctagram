import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import CreateIcon from '../../shared/assets/icons/create.svg'

import {EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import AvatarEditor from 'react-avatar-editor'
import {EditorPanel} from './ui/EditorPanel/EditorPanel'
import {PresetFilters} from './ui/PresetFilters/PresetFilters'
import {createFilteredFile} from './lib/createFilteredFile'
import {EditorButtons} from './ui/EditorButtons/EditorButtons'
import {Describe} from './ui/Describe/Describe'
import {CanvasContainer} from './ui/CanvasContainer/CanvasContainer'
import {useAppDispatch, useAppSelector} from '../../shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '../../_app/store/appSlice'
import {Loader} from '../../shared/ui/Loader'
import {Modal} from '../../shared/ui/Modal/Modal'
import {NavButton} from '../../widgets/Aside/ui/NavButton/NavButton'
import {EmptyAvatar} from '../../shared/assets/icons/emptyAvatar'
import {createPostAC} from './model/slice/createPostSlice'
import {useCreatePostMutation, useUploadImageMutation} from './service/createPost'
import {CreatePostPanel} from './ui/CreatePostPanel/CreatePostPanel'
import {CloseOrSaveToDraft} from './ui/CloseOrSaveToDraft/CloseOrSaveToDraft'
import {getAllDrafts} from './lib/IndexedDB/indexedDB'
import {MAX_COUNT_PHOTO} from './constants/constants'

export const CreatePost = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const {previewImage} = useAppSelector(state => state.createPost)
    const {step, libraryPictures, uploadId, describeText} = useAppSelector(state => state.createPost)
    const [post, {isLoading: isLoadingImage}] = useUploadImageMutation()
    const [postDescribe, {isLoading: isLoadingPost}] = useCreatePostMutation()
    const editorRef = useRef<AvatarEditor>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isNotice, setIsNotice] = useState(false)
    const [hasData, setHasData] = useState(false)

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (libraryPictures.length + 1 > MAX_COUNT_PHOTO) {
            dispatch(
                SetAppNotificationAC({
                    notifications: {type: 'error', message: t.create.errorAddPhotoToLibrary},
                })
            )
            return
        }
        let url = URL.createObjectURL(e.target.files[0])
        dispatch(createPostAC.setPreviewImage(url))
        dispatch(createPostAC.setStep(t.create.steps.cropping))
        dispatch(createPostAC.setLibraryPictures({id: url, img: url, zoom: '1', filter: '', readyToSend: null}))
    }

    useEffect(() => {
        console.log(libraryPictures.length)
    }, [libraryPictures])

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
        if (libraryPictures.length !== 0) {
            setIsNotice(true)
        } else {
            setIsOpen(false)
            dispatch(createPostAC.clearAllState())
        }

        if (libraryPictures.length !== 0 && isNotice) {
            setIsNotice(false)
            setIsOpen(false)
            dispatch(createPostAC.clearAllState())
        }
    }

    const handleChangeStep = (step: string) => {
        if (step === t.create.steps.addPhoto) {
            dispatch(createPostAC.clearAllState())
            return dispatch(createPostAC.setStep(step))
        }

        if (step === t.create.steps.cropping || step === t.create.steps.filters) {
            return dispatch(createPostAC.setStep(step))
        }

        if (step === t.create.steps.describe) {
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
                                notifications: {type: 'success', message: t.create.savePhoto.success.message},
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
                        notifications: {
                            type: 'success',
                            message: t.create.createPost.success.message,
                        },
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

    useEffect(() => {
        dispatch(createPostAC.setStep(t.create.steps.addPhoto))
    }, [t.create.steps.addPhoto])

    const checkData = async () => {
        const data = await getAllDrafts()
        setHasData(data.length > 0)

        setIsOpen(true)
    }

    return (
        <>
            <NavButton title={t.aside.create} icon={<CreateIcon />} onClick={checkData} />

            <Modal title={t.create.modalTitle} isOpen={isOpen} handleClose={handleClose}>
                <ModalContentWrapper>
                    {(isLoadingImage || isLoadingPost) && <Loader />}

                    {step !== t.create.steps.addPhoto && (
                        <EditorButtons
                            isLoading={isLoadingImage}
                            title={step}
                            step={step}
                            onChangeStep={handleChangeStep}
                        />
                    )}
                    <EditorWrapper $isAddPhoto={step === t.create.steps.addPhoto}>
                        {previewImage.length ? (
                            <CanvasContainer editorRef={editorRef} prepareImageToSend={prepareImageToSend} />
                        ) : (
                            <EmptyImageWrapper>
                                <EmptyAvatar />
                            </EmptyImageWrapper>
                        )}

                        {step === t.create.steps.filters && <PresetFilters prepareImageToSend={prepareImageToSend} />}
                        {step === t.create.steps.describe && <Describe />}
                        {step === t.create.steps.addPhoto && (
                            <CreatePostPanel hasData={hasData} handleCreatePost={handleUploadImage} />
                        )}
                        {step === t.create.steps.cropping || step === t.create.steps.filters ? (
                            <EditorPanel handleCreatePost={handleUploadImage} />
                        ) : null}
                    </EditorWrapper>
                </ModalContentWrapper>
                <CloseOrSaveToDraft isNotice={isNotice} handleClose={setIsNotice} handleDelete={handleClose} />
            </Modal>
        </>
    )
}
