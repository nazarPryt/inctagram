import React, {ChangeEvent, useRef, useState} from 'react'
import {EmptyAvatar} from 'shared/assets/icons/emptyAvatar'
import {useAppDispatch, useAppSelector} from 'shared/hooks/reduxHooks'
import {IconButton} from 'shared/ui/IconButton/IconButton'
import {InputFile} from 'shared/ui/InputFile/InputFile'
import {A11y, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import AddIcon from '../../../../shared/assets/icons/addIcon.svg'
import CloseIcon from '../../../../shared/assets/icons/close.svg'
import {createPostAC} from '../../model/slice/createPostSlice'
import {LibraryPictureType} from '../../model/types/createPostSchema'
import {LibraryPicture, LibraryWrapper} from './styled'

type LibraryImagesType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}
export const LibraryImages: React.FC<LibraryImagesType> = ({handleCreatePost}) => {
    const dispatch = useAppDispatch()
    const {libraryPictures} = useAppSelector(state => state.createPost)

    const [libraryHidden, setLibraryHidden] = useState(false)
    const selectPhotoRef = useRef<HTMLInputElement>(null)

    const handleChangeGeneralPicture = async (id: string) => {
        const pictureFromGallery = libraryPictures.find(el => el.id === id && el)
        console.log('handleChangeGeneralPicture', pictureFromGallery)
        if (pictureFromGallery) {
            handleSetPreviewPicture(pictureFromGallery.id)
        }
    }

    const handleSetPreviewPicture = (currentImageId: string) => {
        dispatch(createPostAC.setCurrentImageId(currentImageId))
    }

    const handleDeletePicture = async (id: string, index: number) => {
        const newLibrary = libraryPictures.find(el => el.id === id)
        newLibrary && (await dispatch(createPostAC.deleteImageFromLibrary(newLibrary)))
        const newCurrentImageId = libraryPictures.filter(el => el.id !== id)

        if (newCurrentImageId.length > index) {
            handleSetPreviewPicture(newCurrentImageId[index].id)
        }
    }

    const handlerAddPhoto = () => {
        selectPhotoRef && selectPhotoRef.current?.click()
    }

    return (
        <div className='library'>
            <span onClick={() => setLibraryHidden(!libraryHidden)}>
                <EmptyAvatar />
            </span>
            <LibraryWrapper hidden={libraryHidden} $countPictures={libraryPictures.length || 1}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Keyboard]}
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation={true}
                    keyboard={true}
                    width={360}
                >
                    <div className={'OVER'}>
                        {libraryPictures.map((el, index) => (
                            <SwiperSlide key={el.id}>
                                <LibraryPicture
                                    image={el.img}
                                    filter={el.filter}
                                    onClick={() => handleChangeGeneralPicture(el.id)}
                                />
                                {libraryPictures.length > 1 && (
                                    <IconButton className='close' onClick={() => handleDeletePicture(el.id, index)}>
                                        <CloseIcon />
                                    </IconButton>
                                )}
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <div>
                    <IconButton onClick={handlerAddPhoto}>
                        <AddIcon />
                    </IconButton>
                </div>
                <InputFile
                    title={'Select from Computer'}
                    ref={selectPhotoRef}
                    onChange={handleCreatePost}
                    accept={'image/png, image/jpeg'}
                    multiple={false}
                />
            </LibraryWrapper>
        </div>
    )
}
