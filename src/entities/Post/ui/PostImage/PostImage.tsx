import Image from 'next/image'
import { A11y, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PostImageWrapper } from 'entities/Post/ui/PostImage/PostImage.styled'
import { PostCardImageType } from 'entities/UserPosts/api/types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const PostImage = ({ images }: { images: PostCardImageType[] }): JSX.Element => {
  return (
    <PostImageWrapper>
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
        {images.map(({ height, uploadId, url, width }) => {
          return (
            <SwiperSlide key={uploadId}>
              <Image alt="Post-Image" height={height} src={url} width={width} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </PostImageWrapper>
  )
}
