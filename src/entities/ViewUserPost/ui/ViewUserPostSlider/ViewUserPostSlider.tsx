import { ComponentPropsWithoutRef } from 'react'

import Image from 'next/image'
import { A11y, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PostByIdImages } from 'entities/ViewUserPost/api/type'
import { ViewUserPostSliderWrapper } from 'entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider.styled'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type PropsType = ComponentPropsWithoutRef<'div'> & {
  images: PostByIdImages[]
}

export const ViewUserPostSlider = ({ className, images }: PropsType): JSX.Element => {
  return (
    <ViewUserPostSliderWrapper className={className}>
      <Swiper
        keyboard
        navigation
        className="Swiper"
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
        {images.map(photo => {
          if (photo.width === 1440) {
            // todo ask if exist better way how to show JUST hight resolution pictures
            return (
              <SwiperSlide key={photo.uploadId} className="slide">
                <Image alt="Post-Image" height={photo.height} src={photo.url} width={photo.width} />
              </SwiperSlide>
            )
          }

          return undefined
        })}
      </Swiper>
    </ViewUserPostSliderWrapper>
  )
}
