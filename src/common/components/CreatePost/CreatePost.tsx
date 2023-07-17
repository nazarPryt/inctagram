import React, {ChangeEvent, useRef, useState} from 'react'
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
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {Modal} from 'shared/components/Modal/BaseModal'

export type StepsType = 'Add Photo' | 'Cropping' | 'Filters' | 'Describe' | 'SENDING'

export type LibraryPicturesType = {
    id: string
    img: string
    zoom: string | '1'
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
    const [libraryPictures, setLibraryPictures] = useState<LibraryPicturesType[]>([])
    const [uploadID, setUploadID] = useState<string>('')
    const [picture, setPicture] = useState({
        img: '',
        zoom: '1',
    })

    const handleResize = (width: number, height: number) => {
        setWidth(width)
        setHeight(height)
    }

    const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescribeText(e.target.value.trim())
    }

    const handleCreatePost = () => {
        const postData = {
            description: describeText,
            childrenMetadata: [
                {
                    uploadId: uploadID,
                },
            ],
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

    const handleSave = async () => {
        if (editorRef.current) {
            const file = await createFilteredFile(editorRef, filter)

            const formData = new FormData()

            formData.append('file', file)

            post(formData)
                .unwrap()
                .then(res => {
                    setUploadID(res.images[0].uploadId)
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

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        setPicture({
            ...picture,
            img: url,
        })

        setLibraryPictures(prev => [...prev, {id: url, img: url, zoom: '1'}])

        setStep('Cropping')
    }

    const handleClear = () => {
        setPicture({
            ...picture,
            img: '',
        })
    }

    const handleClose = () => {
        setIsOpen(false)
        handleClear()
    }

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        setPicture({
            ...picture,
            zoom: e.target.value,
        })
    }

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
        // if (step === 'Add Photo') {
        //     handleClear()
        // }
        //
        // if (step === 'Describe') {
        //     handleSave()
        //     setStep(step)
        // }
        //
        // if (step === 'SENDING') {
        //     handleCreatePost()
        //     setStep('Add Photo')
        //     handleClose()
        //     setLibraryPictures([])
        //     setDescribeText('')
        //     setFilter('')
        // }
        //
        // if (step === 'Filters') {
        //     setStep(step)
        // }
    }

    const handleChangeGeneralPicture = (id: string) => {
        const pictureFromGallery = libraryPictures.find(el => (el.id === id ? {...el} : null))
        if (pictureFromGallery) {
            setPicture({
                img: pictureFromGallery.img,
                zoom: pictureFromGallery.zoom,
            })
        }
    }

    const handleDeletePicture = (id: string) => {
        const newLibrary = libraryPictures.filter(el => el.id !== id)
        const newImagePreview = libraryPictures[0]
        setPicture({
            img: newImagePreview.img,
            zoom: newImagePreview.zoom,
        })
        setLibraryPictures(newLibrary)
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
                        {picture.img.length ? (
                            <>
                                <CanvasContainer
                                    editorRef={editorRef}
                                    height={height}
                                    width={width}
                                    filter={filter}
                                    picture={picture}
                                />
                                {step === 'Filters' && (
                                    <PresetFilters
                                        picture={picture.img}
                                        handleSave={handleSave}
                                        setFilter={setFilter}
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
                                valueZoom={picture.zoom}
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
