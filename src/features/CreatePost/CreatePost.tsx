import {ChangeEvent, useEffect, useRef, useState} from 'react'
import AvatarEditor from 'react-avatar-editor'

import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {SetAppNotificationAC} from '@/shared/store/appSlice'
import {Modal} from '@/shared/ui/Modal/Modal'
import {NavButton} from '@/widgets/Aside/ui/NavButton/NavButton'
import {EmptyAvatar, Loader, SquarePlusIcon} from '@nazar-pryt/inctagram-ui-kit'

import {getAllDrafts} from './lib/IndexedDB/indexedDB'
import {createFilteredFile} from './lib/createFilteredFile'
import {createPostAC} from './model/slice/createPostSlice'
import {editorPanelAC} from './model/slice/editorPanelSlice'
import {useCreatePostMutation, useUploadImageMutation} from './service/createPost'
import {EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import {CanvasContainer} from './ui/CanvasContainer/CanvasContainer'
import {CloseOrSaveToDraft} from './ui/CloseOrSaveToDraft/CloseOrSaveToDraft'
import {CreatePostPanel} from './ui/CreatePostPanel/CreatePostPanel'
import {Describe} from './ui/Describe/Describe'
import {EditorButtons} from './ui/EditorButtons/EditorButtons'
import {EditorPanel} from './ui/EditorPanel/EditorPanel'
import {PresetFilters} from './ui/PresetFilters/PresetFilters'

export const CreatePost = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const {defaultHeight, defaultWidth, previewImage} = useAppSelector(state => state.createPost)
    const {describeText, libraryPictures, step, uploadId} = useAppSelector(state => state.createPost)
    const [post, {isLoading: isLoadingImage}] = useUploadImageMutation()
    const [postDescribe, {isLoading: isLoadingPost}] = useCreatePostMutation()
    const editorRef = useRef<AvatarEditor>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isNotice, setIsNotice] = useState(false)
    const [hasData, setHasData] = useState(false)

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const url = URL.createObjectURL(e.target.files[0])

        dispatch(createPostAC.setPreviewImage(url))
        dispatch(createPostAC.setStep(t.create.steps.cropping))
        dispatch(createPostAC.setCurrentImageId(url))
        dispatch(
            createPostAC.setLibraryPictures({
                filter: '',
                height: defaultHeight,
                id: url,
                img: url,
                readyToSend: null,
                width: defaultWidth,
                zoom: '1',
            })
        )
    }

    const prepareImageToSend = async (img: string, filter: string) => {
        const currImage = libraryPictures.find((el: any) => el.img === img)

        if (editorRef.current && currImage) {
            const file = await createFilteredFile(editorRef, filter)

            dispatch(createPostAC.uploadFile({file, img}))
        } else {
            const file = await createFilteredFile(editorRef, filter)

            dispatch(
                createPostAC.setLibraryPictures({
                    filter: '',
                    height: defaultHeight,
                    id: img,
                    img,
                    readyToSend: file,
                    width: defaultWidth,
                    zoom: '1',
                })
            )
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
        dispatch(editorPanelAC.setCloseAllPopup(false))
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
                                notifications: {message: t.create.savePhoto.success.message, type: 'success'},
                            })
                        )
                    })

                    .catch(error => {
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {message: error.message, type: 'error'},
                            })
                        )
                    })
            }
        }
    }

    const handleCreatePost = () => {
        const postData = {
            childrenMetadata: uploadId,
            description: describeText,
        }

        postDescribe(postData)
            .unwrap()
            .then(() => {
                setIsNotice(false)
                setIsOpen(false)
                dispatch(createPostAC.clearAllState())
                dispatch(
                    SetAppNotificationAC({
                        notifications: {
                            message: t.create.createPost.success.message,
                            type: 'success',
                        },
                    })
                )
            })

            .catch(error => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: error.message, type: 'error'},
                    })
                )
            })
    }

    useEffect(() => {
        dispatch(createPostAC.setStep(t.create.steps.addPhoto))
    }, [t.create.steps.addPhoto, dispatch])

    const checkData = async () => {
        const data = await getAllDrafts()

        setHasData(data.length > 0)

        setIsOpen(true)
    }

    return (
        <>
            <NavButton icon={<SquarePlusIcon />} onClick={checkData} title={t.aside.create} />

            <Modal handleClose={handleClose} isOpen={isOpen} title={t.create.modalTitle}>
                <ModalContentWrapper>
                    {(isLoadingImage || isLoadingPost) && <Loader />}

                    {step !== t.create.steps.addPhoto && (
                        <EditorButtons
                            isLoading={isLoadingImage}
                            onChangeStep={handleChangeStep}
                            step={step}
                            title={step}
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
                            <CreatePostPanel handleCreatePost={handleUploadImage} hasData={hasData} />
                        )}
                        {step === t.create.steps.cropping || step === t.create.steps.filters ? (
                            <EditorPanel handleCreatePost={handleUploadImage} />
                        ) : null}
                    </EditorWrapper>
                </ModalContentWrapper>
                <CloseOrSaveToDraft handleClose={setIsNotice} handleDelete={handleClose} isNotice={isNotice} />
            </Modal>
        </>
    )
}
