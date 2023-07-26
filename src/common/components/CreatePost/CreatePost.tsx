import React, {ChangeEvent, useRef, useState} from 'react'
import CreateIcon from 'common/assets/icons/create.svg'

import {EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import {useCreatePostMutation, useUploadImageMutation} from 'redux/api/postsAPI'
import AvatarEditor from 'react-avatar-editor'
import {EditorPanel} from './components/EditorPanel/EditorPanel'
import {SelectPhoto} from './components/SelectPhoto/SelectPhoto'
import {PresetFilters} from './components/PresetFilters/PresetFilters'
import {createFilteredFile} from './createFilteredFile'
import {EditorButtons} from './components/EditorButtons/EditorButtons'
import {Describe} from './components/Describe/Describe'
import {CanvasContainer} from './components/CanvasContainer/CanvasContainer'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {ImageMetaData} from 'redux/types/postsTypes'
import {Loader} from 'shared/components/Loader/Loader'
import {Modal} from 'shared/components/Modal/Modal'
import {NavButton} from 'widgets/Aside/ui/NavButton/NavButton'
import {EmptyAvatar} from 'common/assets/icons/emptyAvatar'

export type StepsType = 'Add Photo' | 'Cropping' | 'Filters' | 'Describe' | 'SENDING'

export type LibraryPictureType = {
    id: string
    img: string
    zoom: string | '1'
    filter: string
    readyToSend: File | null
}

export const CreatePost = () => {
    const dispatch = useAppDispatch()
    const [post, loadingImage] = useUploadImageMutation()
    const [postDescribe, loadingPost] = useCreatePostMutation()
    const editorRef = useRef<AvatarEditor>(null)
    const [step, setStep] = useState<StepsType>('Add Photo')
    const [width, setWidth] = useState(485)
    const [height, setHeight] = useState(465)
    const [filter, setFilter] = useState('')
    const [describeText, setDescribeText] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [libraryPictures, setLibraryPictures] = useState<LibraryPictureType[]>([])
    const [uploadID, setUploadID] = useState<ImageMetaData[]>([])
    const [image, setImage] = useState({
        id: '',
        img: '',
        filter: '',
        zoom: '1',
    })

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        setImage({
            id: url,
            img: url,
            filter: '',
            zoom: '1',
        })

        setLibraryPictures(prev => [...prev, {id: url, img: url, zoom: '1', filter: '', readyToSend: null}])

        setStep('Cropping')
    }

    const prepareImageToSend = async (img: string) => {
        const currImage = libraryPictures.find(el => el.img === img)
        if (editorRef.current) {
            const file = await createFilteredFile(editorRef, currImage!.filter)

            setLibraryPictures(prev => prev.map(el => (el.img === img ? {...el, readyToSend: file} : {...el})))
        }
    }

    const handleSetFilter = async (filter: string) => {
        setImage({
            ...image,
            filter: filter,
        })
        setFilter(filter)

        setLibraryPictures(prev => prev.map(el => (el.img === image.img ? {...el, filter: filter} : {...el})))

        await prepareImageToSend(image.id)
    }

    const handleSetPreviewPicture = (img: LibraryPictureType) => {
        setImage({
            id: img.id,
            img: img.img,
            filter: img.filter,
            zoom: img.zoom,
        })
    }

    const handleResize = (width: number, height: number) => {
        setWidth(width)
        setHeight(height)
    }

    const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescribeText(e.target.value.trim())
    }

    const handleClear = () => {
        setImage({
            id: '',
            img: '',
            filter: '',
            zoom: '1',
        })
        setLibraryPictures([])
    }

    const handleClose = () => {
        setIsOpen(false)
        handleClear()
    }

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        setImage({
            ...image,
            zoom: e.target.value,
        })
    }
    const handleChangeStep = (step: StepsType) => {
        switch (step) {
            case 'Add Photo': {
                handleClear()
                setStep(step)
                break
            }
            case 'Cropping': {
                setStep(step)
                break
            }
            case 'Describe': {
                handleSave()
                setStep(step)
                break
            }
            case 'Filters': {
                setStep(step)
                break
            }
            case 'SENDING': {
                handleCreatePost()
                break
            }
        }
    }

    const handleChangeGeneralPicture = async (id: string) => {
        await prepareImageToSend(image.id)
        const pictureFromGallery = libraryPictures.find(el => (el.id === id ? {...el} : null))
        if (pictureFromGallery) {
            handleSetPreviewPicture(pictureFromGallery)
        }
    }

    const handleDeletePicture = (id: string) => {
        const newLibrary = libraryPictures.filter(el => el.id !== id)
        const newImagePreview = libraryPictures[0]
        handleSetPreviewPicture(newImagePreview)
        setLibraryPictures(newLibrary)
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
                        setUploadID(prev => [...prev, {uploadId: res.images[0].uploadId}])
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
            childrenMetadata: uploadID,
        }
        postDescribe(postData)
            .unwrap()
            .then(() => {
                setStep('Add Photo')
                handleClose()
                setLibraryPictures([])
                setDescribeText('')
                setFilter('')
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
            <NavButton title={'Create'} icon={<CreateIcon />} onClick={() => setIsOpen(true)} />

            <Modal title={step} isOpen={isOpen} handleClose={handleClose}>
                <ModalContentWrapper>
                    {(loadingImage.isLoading || loadingPost.isLoading) && <Loader />}
                    {step !== 'Add Photo' && (
                        <EditorButtons
                            isLoading={loadingImage.isLoading}
                            title={step}
                            onChangeStep={handleChangeStep}
                        />
                    )}
                    <EditorWrapper>
                        {image.img.length ? (
                            <CanvasContainer
                                editorRef={editorRef}
                                height={height}
                                width={width}
                                filter={filter}
                                picture={image}
                                prepareImageToSend={prepareImageToSend}
                            />
                        ) : (
                            <EmptyImageWrapper>
                                <EmptyAvatar />
                            </EmptyImageWrapper>
                        )}

                        {step === 'Filters' && (
                            <PresetFilters
                                picture={image.img}
                                handleSave={handleSave}
                                handleSetFilter={handleSetFilter}
                            />
                        )}

                        {step === 'Describe' && (
                            <Describe describeText={describeText} changeTextHandler={handleChangeText} />
                        )}
                        {step === 'Add Photo' && <SelectPhoto handleCreatePost={handleUploadImage} />}

                        {step === 'Cropping' || step === 'Filters' ? (
                            <EditorPanel
                                libraryPictures={libraryPictures}
                                valueZoom={image.zoom}
                                width={width}
                                height={height}
                                onChangeGeneralPicture={handleChangeGeneralPicture}
                                onDeletePicture={handleDeletePicture}
                                handleCreatePost={handleUploadImage}
                                onChangeResize={handleResize}
                                onChangeZoom={handleZoom}
                            />
                        ) : null}
                    </EditorWrapper>
                </ModalContentWrapper>
            </Modal>
        </>
    )
}
