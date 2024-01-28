import {PostCardImageType} from '@/entities/UserPosts/api/types'
import Image from 'next/image'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostImageWrapper} from './PostImage.styled'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

export const PostImage = (props: {images: PostCardImageType[]}) => {
    return (
        <PostImageWrapper>
            <Swiper
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                keyboard
                modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                slidesPerView={1}
                spaceBetween={0}
            >
                {props.images.map(photo => {
                    return (
                        <SwiperSlide key={photo.uploadId}>
                            <Image alt={'Post-Image'} height={photo.height} src={photo.url} width={photo.width} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </PostImageWrapper>
    )
}
