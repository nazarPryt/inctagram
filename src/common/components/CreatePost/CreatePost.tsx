import React, {ChangeEvent, Ref, RefObject, useEffect, useRef, useState} from 'react'
import CreateIcon from 'common/assets/icons/create.svg'

import {CreatePostButton, EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import EmptyIcon from '../../assets/icons/emptyAvatar.svg'
import {useCreatePostMutation, useUploadImageMutation} from 'redux/api/postsAPI'
import AvatarEditor from 'react-avatar-editor'
import {EditorPanel} from './components/EditorPanel/EditorPanel'
import {SelectPhoto} from './components/SelectPhoto/SelectPhoto'
import {PresetFilters} from './components/PresetFilters/PresetFilters'
import {createFilteredFile} from './createFilteredFile'
import {EditorButtons} from './components/EditorButtons/EditorButtons'
import {Describe} from './components/Describe/Describe'
import {CanvasContainer} from './components/CanvasContainer/CanvasContainer'
import {useAppDispatch, useAppSelector} from 'shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {Modal} from 'shared/components/Modal/BaseModal'
import {Button} from '../../../shared/components/Button/Button'
import {dataURLtoFile} from './dataURLtoFile'
import {Blob} from 'node-fetch'
import {ImageMetaData} from '../../../redux/types/postsTypes'
import {setImage} from './model/slice/uploadPhotoSlice'

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
    const [post, {isLoading}] = useUploadImageMutation()
    const [postDescribe] = useCreatePostMutation()
    const editorRef = useRef<AvatarEditor>(null)

    const [step, setStep] = useState<StepsType>('Add Photo')
    const [width, setWidth] = useState(485)
    const [height, setHeight] = useState(465)
    const [filter, setFilter] = useState('')
    const [describeText, setDescribeText] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [libraryPictures, setLibraryPictures] = useState<LibraryPictureType[]>([])
    const [uploadID, setUploadID] = useState<ImageMetaData[]>([])
    const image = useAppSelector(state => state.uploadPhoto)
    // const [picture, setPicture] = useState<LibraryPictureType>(image)

    const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        dispatch(
            setImage({
                id: url,
                img: url,
                filter: '',
                zoom: '1',
            })
        )

        setLibraryPictures(prev => [...prev, {id: url, img: url, zoom: '1', filter: '', readyToSend: null}])
        await prepareImageToSend(url)
        setStep('Cropping')
    }

    const handleSetFilter = async (filter: string) => {
        dispatch(
            setImage({
                ...image,
                filter: filter,
            })
        )
        setFilter(filter)
        await prepareImageToSend(image.id)
    }

    const handleSetPreviewPicture = (img: LibraryPictureType) => {
        dispatch(
            setImage({
                id: img.id,
                img: img.img,
                filter: img.filter,
                zoom: img.zoom,
            })
        )
    }

    const handleResize = (width: number, height: number) => {
        setWidth(width)
        setHeight(height)
    }

    const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescribeText(e.target.value.trim())
    }

    const handleClear = () => {
        dispatch(
            setImage({
                id: '',
                img: '',
                filter: '',
                zoom: '1',
            })
        )
    }

    const handleClose = () => {
        setIsOpen(false)
        handleClear()
    }

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setImage({
                ...image,
                zoom: e.target.value,
            })
        )
    }
    //todo разобраться с шагами назад!!!
    const handleChangeStep = (step: StepsType) => {
        switch (step) {
            case 'Add Photo': {
                handleClear()
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
                setStep('Add Photo')
                handleClose()
                setLibraryPictures([])
                setDescribeText('')
                setFilter('')
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

    const prepareImageToSend = async (id: string) => {
        if (editorRef.current) {
            const file = await createFilteredFile(editorRef, filter)
            setLibraryPictures(prev => prev.map(el => (el.id === id ? {...el, readyToSend: file} : {...el})))
        }
    }

    useEffect(() => {
        console.log(libraryPictures)
    }, [libraryPictures])

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
            <CreatePostButton onClick={() => setIsOpen(true)}>
                <CreateIcon />
                Create
            </CreatePostButton>

            <Modal title={step} isOpen={isOpen} handleClose={handleClose}>
                <ModalContentWrapper>
                    {step !== 'Add Photo' && (
                        <EditorButtons isLoading={isLoading} title={step} onChangeStep={handleChangeStep} />
                    )}
                    <EditorWrapper>
                        {image.img.length ? (
                            <>
                                <CanvasContainer
                                    editorRef={editorRef}
                                    height={height}
                                    width={width}
                                    filter={filter}
                                    picture={image}
                                />
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
                            </>
                        ) : (
                            <EmptyImageWrapper>
                                <EmptyIcon />
                            </EmptyImageWrapper>
                        )}
                        {step === 'Add Photo' && <SelectPhoto handleCreatePost={handleUploadImage} />}

                        {step === 'Cropping' && (
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
                        )}
                    </EditorWrapper>
                </ModalContentWrapper>
            </Modal>
        </>
    )
}
