import { FC, RefObject } from 'react'

import AvatarEditor from 'react-avatar-editor'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Wrapper } from './styled'

import { useAppSelector } from 'shared/hooks/reduxHooks'

type CanvasContainerType = {
  editorRef: RefObject<AvatarEditor>
  prepareImageToSend: (img: string, filter: string) => void
}

export const CanvasContainer: FC<CanvasContainerType> = ({ editorRef, prepareImageToSend }) => {
  const { previewImage, previewFilter, defaultWidth, defaultHeight, libraryPictures } = useAppSelector(
    state => state.createPost
  )

  const handlePrepareImage = (): void => {
    prepareImageToSend(previewImage, previewFilter)
  }

  return (
    <Wrapper height={defaultHeight} width={defaultWidth}>
      <Swiper
        keyboard
        navigation
        modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 7000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {libraryPictures.map(img => {
          return (
            <SwiperSlide key={img.id}>
              <AvatarEditor
                ref={editorRef}
                disableHiDPIScaling
                border={0}
                height={defaultHeight}
                image={img.img}
                scale={+img.zoom}
                width={defaultWidth}
                style={{
                  filter: previewFilter,
                }}
                onImageReady={handlePrepareImage}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  )
}
