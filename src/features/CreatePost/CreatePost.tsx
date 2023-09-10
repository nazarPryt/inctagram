import { ChangeEvent, useEffect, useRef, useState } from 'react'

import AvatarEditor from 'react-avatar-editor'

import { SetAppNotificationAC } from '../../_app/store/appSlice'
import { NavButton } from '../../widgets/Aside/ui/NavButton/NavButton'

import { createFilteredFile } from './lib/createFilteredFile'
import { getAllDrafts } from './lib/IndexedDB/indexedDB'
import { createPostAC } from './model/slice/createPostSlice'
import { useCreatePostMutation, useUploadImageMutation } from './service/createPost'
import { EditorWrapper, EmptyImageWrapper, ModalContentWrapper } from './styled'
import { CanvasContainer } from './ui/CanvasContainer/CanvasContainer'
import { CloseOrSaveToDraft } from './ui/CloseOrSaveToDraft/CloseOrSaveToDraft'
import { CreatePostPanel } from './ui/CreatePostPanel/CreatePostPanel'
import { Describe } from './ui/Describe/Describe'
import { EditorButtons } from './ui/EditorButtons/EditorButtons'
import { EditorPanel } from './ui/EditorPanel/EditorPanel'
import { PresetFilters } from './ui/PresetFilters/PresetFilters'

import CreateIcon from 'shared/assets/icons/create.svg'
import { EmptyAvatar } from 'shared/assets/icons/emptyAvatar'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal/Modal'

export const CreatePost = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { previewImage, defaultHeight, defaultWidth } = useAppSelector(state => state.createPost)
  const { step, libraryPictures, uploadId, describeText } = useAppSelector(state => state.createPost)
  const [post, { isLoading: isLoadingImage }] = useUploadImageMutation()
  const [postDescribe, { isLoading: isLoadingPost }] = useCreatePostMutation()
  const editorRef = useRef<AvatarEditor>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isNotice, setIsNotice] = useState(false)
  const [hasData, setHasData] = useState(false)

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return
    const url = URL.createObjectURL(e.target.files[0])

    dispatch(createPostAC.setPreviewImage(url))
    dispatch(createPostAC.setStep(t.create.steps.cropping))
    dispatch(createPostAC.setCurrentImageId(url))
    dispatch(
      createPostAC.setLibraryPictures({
        id: url,
        img: url,
        zoom: '1',
        filter: '',
        readyToSend: null,
        width: defaultWidth,
        height: defaultHeight,
      })
    )
  }

  const prepareImageToSend = async (img: string, filter: string): Promise<void> => {
    const currImage = libraryPictures.find(el => el.img === img)

    if (editorRef.current && currImage) {
      const file = await createFilteredFile(editorRef, filter)

      dispatch(createPostAC.uploadFile({ img, file }))
    } else {
      const file = await createFilteredFile(editorRef, filter)

      dispatch(
        createPostAC.setLibraryPictures({
          id: img,
          img,
          zoom: '1',
          filter: '',
          readyToSend: file,
          width: defaultWidth,
          height: defaultHeight,
        })
      )
    }
  }

  const handleClose = (): void => {
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

    // TODO
    return undefined
  }

  const handleSave = async (): Promise<void> => {
    // TODO
    // eslint-disable-next-line no-restricted-syntax
    for (const image of libraryPictures) {
      const file = image.readyToSend

      if (file) {
        const formData = new FormData()

        formData.append('file', file)

        post(formData)
          .unwrap()
          .then(res => {
            dispatch(createPostAC.setUploadId({ uploadId: res.images[0].uploadId }))
            dispatch(
              SetAppNotificationAC({
                notifications: { type: 'success', message: t.create.savePhoto.success.message },
              })
            )
          })

          .catch(error => {
            dispatch(
              SetAppNotificationAC({
                notifications: { type: 'error', message: error.message },
              })
            )
          })
      }
    }
  }

  const handleCreatePost = (): void => {
    const postData = {
      description: describeText,
      childrenMetadata: uploadId,
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
              type: 'success',
              message: t.create.createPost.success.message,
            },
          })
        )
      })

      .catch(error => {
        dispatch(
          SetAppNotificationAC({
            notifications: { type: 'error', message: error.message },
          })
        )
      })
  }

  useEffect(() => {
    dispatch(createPostAC.setStep(t.create.steps.addPhoto))
  }, [dispatch, t.create.steps.addPhoto])

  const checkData = async (): Promise<void> => {
    const data = await getAllDrafts()

    setHasData(data.length > 0)

    setIsOpen(true)
  }

  return (
    <>
      <NavButton icon={<CreateIcon />} title={t.aside.create} onClick={checkData} />

      <Modal handleClose={handleClose} isOpen={isOpen} title={t.create.modalTitle}>
        <ModalContentWrapper>
          {(isLoadingImage || isLoadingPost) && <Loader />}

          {step !== t.create.steps.addPhoto && (
            <EditorButtons isLoading={isLoadingImage} step={step} title={step} onChangeStep={handleChangeStep} />
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
