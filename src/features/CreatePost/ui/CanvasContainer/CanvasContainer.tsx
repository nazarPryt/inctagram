import { FC, RefObject, useEffect } from 'react'

import AvatarEditor from 'react-avatar-editor'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { Wrapper } from './styled'

import { LibraryPictureType } from 'features/CreatePost/model/types/createPostSchema'
import { useAppSelector } from 'shared/hooks/reduxHooks'

type CanvasContainerType = {
  editorRef: RefObject<AvatarEditor>
  prepareImageToSend: (img: string, filter: string) => void
}

export const CanvasContainer: FC<CanvasContainerType> = ({ prepareImageToSend, editorRef }) => {
  const { defaultWidth, defaultHeight, libraryPictures } = useAppSelector(state => state.createPost)

  return (
    <Wrapper height={defaultHeight} width={defaultWidth}>
      <Swiper
        keyboard
        navigation
        modules={[Navigation, Pagination, A11y, Keyboard]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {libraryPictures.map(img => {
          return (
            <SwiperSlide key={img.id}>
              <SlideComponent editorRef={editorRef} img={img} prepareImageToSend={prepareImageToSend} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  )
}

type SlidePropsType = {
  img: LibraryPictureType
  editorRef: RefObject<AvatarEditor>
  prepareImageToSend: (img: string, filter: string) => void
}

const SlideComponent = ({ img, editorRef, prepareImageToSend }: SlidePropsType): JSX.Element => {
  const swiper = useSwiper()

  const { previewImage, previewFilter, defaultWidth, defaultHeight, libraryPictures, currentImageId } = useAppSelector(
    state => state.createPost
  )

  const handlePrepareImage = (): void => {
    prepareImageToSend(previewImage, previewFilter)
  }

  useEffect(() => {
    const imageIndex = libraryPictures.findIndex(picture => picture.id === currentImageId)

    swiper.slideTo(imageIndex)
  }, [currentImageId, libraryPictures, swiper])

  return (
    <AvatarEditor
      ref={editorRef}
      disableHiDPIScaling
      border={0}
      height={defaultHeight}
      image={img.img}
      scale={+img.zoom}
      width={defaultWidth}
      style={{
        filter: img.filter,
      }}
      onImageReady={handlePrepareImage}
    />
  )
}
