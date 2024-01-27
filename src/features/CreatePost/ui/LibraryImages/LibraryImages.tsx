import React, {ChangeEvent, useRef} from 'react'

import AddIcon from '@/shared/assets/icons/addIcon.svg'
import CloseIcon from '@/shared/assets/icons/close.svg'
import {EmptyAvatar} from '@/shared/assets/icons/emptyAvatar'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {IconButton} from '@/shared/ui/IconButton/IconButton'
import {InputFile} from '@/shared/ui/InputFile/InputFile'
import {A11y, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {createPostAC} from '../../model/slice/createPostSlice'
import {editorPanelAC} from '../../model/slice/editorPanelSlice'
import {LibraryPicture, LibraryWrapper} from './styled'

type LibraryImagesType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}
export const LibraryImages: React.FC<LibraryImagesType> = ({handleCreatePost}) => {
    const dispatch = useAppDispatch()
    const {onLibrary} = useAppSelector(state => state.editorPanel)
    const {libraryPictures} = useAppSelector(state => state.createPost)

    const selectPhotoRef = useRef<HTMLInputElement>(null)

    const handleChangeGeneralPicture = async (id: string) => {
        const pictureFromGallery = libraryPictures.find((el: any) => el.id === id && el)

        if (pictureFromGallery) {
            handleSetPreviewPicture(pictureFromGallery.id)
            dispatch(createPostAC.setPreviewImage(pictureFromGallery.img))
        }
    }

    const handleSetPreviewPicture = (currentImageId: string) => {
        dispatch(createPostAC.setCurrentImageId(currentImageId))
    }

    const handleDeletePicture = async (id: string, index: number) => {
        const newLibrary = libraryPictures.find((el: any) => el.id === id)

        newLibrary && (await dispatch(createPostAC.deleteImageFromLibrary(newLibrary)))
        const newLibrariesPictures = libraryPictures.filter((el: any) => el.id !== id)

        if (newLibrariesPictures.length > index) {
            handleSetPreviewPicture(newLibrariesPictures[index].id)
            dispatch(createPostAC.setPreviewImage(newLibrariesPictures[index].img))
        }
    }

    const handlerAddPhoto = () => {
        selectPhotoRef && selectPhotoRef.current?.click()
    }

    const handleClickLibrary = () => {
        dispatch(editorPanelAC.setOnLibrary(!onLibrary))
    }

    return (
        <div className={`library`}>
            <span className={onLibrary ? 'libraryActive' : ''} onClick={handleClickLibrary}>
                <EmptyAvatar />
            </span>
            <LibraryWrapper $countPictures={libraryPictures.length || 1} hidden={onLibrary}>
                <Swiper
                    keyboard
                    modules={[Navigation, Pagination, A11y, Keyboard]}
                    navigation
                    slidesPerView={4}
                    spaceBetween={0}
                    width={360}
                >
                    <div className={'OVER'}>
                        {libraryPictures.map((el: any, index: number) => (
                            <SwiperSlide key={el.id}>
                                <LibraryPicture
                                    filter={el.filter}
                                    image={el.img}
                                    onClick={() => handleChangeGeneralPicture(el.id)}
                                />
                                {libraryPictures.length > 1 && (
                                    <IconButton className={'close'} onClick={() => handleDeletePicture(el.id, index)}>
                                        <CloseIcon />
                                    </IconButton>
                                )}
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                {libraryPictures.length < 10 && (
                    <div>
                        <IconButton onClick={handlerAddPhoto}>
                            <AddIcon />
                        </IconButton>
                    </div>
                )}
                <InputFile
                    accept={'image/png, image/jpeg'}
                    multiple={false}
                    onChange={handleCreatePost}
                    ref={selectPhotoRef}
                    title={'Select from Computer'}
                />
            </LibraryWrapper>
        </div>
    )
}
