import { ChangeEvent, FC, useRef, useState } from 'react'

import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { createPostAC } from '../../model/slice/createPostSlice'
import { LibraryPictureType } from '../../model/types/createPostSchema'

import { LibraryPicture, LibraryWrapper } from './styled'

import AddIcon from 'shared/assets/icons/addIcon.svg'
import CloseIcon from 'shared/assets/icons/close.svg'
import { EmptyAvatar } from 'shared/assets/icons/emptyAvatar'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { IconButton } from 'shared/ui/IconButton/IconButton'
import { InputFile } from 'shared/ui/InputFile/InputFile'

type LibraryImagesType = {
  handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}
export const LibraryImages: FC<LibraryImagesType> = ({ handleCreatePost }) => {
  const dispatch = useAppDispatch()
  const { libraryPictures } = useAppSelector(state => state.createPost)

  const [libraryHidden, setLibraryHidden] = useState(false)
  const selectPhotoRef = useRef<HTMLInputElement>(null)

  const handleChangeGeneralPicture = async (id: string) => {
    const pictureFromGallery = libraryPictures.find(el => (el.id === id ? { ...el } : null))

    if (pictureFromGallery) {
      console.log(2222)
      handleSetPreviewPicture(pictureFromGallery)
    }
  }

  const handleSetPreviewPicture = (data: LibraryPictureType) => {
    dispatch(createPostAC.setPreviewPicture(data))
  }

  const handleDeletePicture = async (id: string) => {
    const newLibrary = libraryPictures.find(el => el.id === id)

    // TODO
    // eslint-disable-next-line no-unused-expressions
    newLibrary && (await dispatch(createPostAC.deleteImageFromLibrary(newLibrary)))
    const newImagePreview = libraryPictures.filter(el => el.id !== id)[0]

    handleSetPreviewPicture(newImagePreview)
  }

  const handlerAddPhoto = () => {
    // eslint-disable-next-line no-unused-expressions
    selectPhotoRef && selectPhotoRef.current?.click()
  }

  return (
    <div className="library">
      <button type="button" onClick={() => setLibraryHidden(!libraryHidden)}>
        <EmptyAvatar />
      </button>
      <LibraryWrapper countPictures={libraryPictures.length || 1} hidden={libraryHidden}>
        <Swiper
          keyboard
          navigation
          modules={[Navigation, Pagination, A11y, Keyboard]}
          slidesPerView={4}
          spaceBetween={0}
          width={360}
        >
          <div className="OVER">
            {libraryPictures.map(el => (
              <SwiperSlide key={el.id}>
                <LibraryPicture filter={el.filter} image={el.img} onClick={() => handleChangeGeneralPicture(el.id)} />
                {libraryPictures.length > 1 && (
                  <IconButton className="close" onClick={() => handleDeletePicture(el.id)}>
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
          ref={selectPhotoRef}
          accept="image/png, image/jpeg"
          multiple={false}
          title="Select from Computer"
          onChange={handleCreatePost}
        />
      </LibraryWrapper>
    </div>
  )
}
