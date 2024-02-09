import {PostsTypeItemsImages} from '@/entities/UserPosts/api/types'
import Image from 'next/image'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostImageWrapper} from './PostImage.styled'

export const PostImage = ({images}: {images: PostsTypeItemsImages[]}) => {
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
                {images.map(photo => {
                    return (
                        <SwiperSlide key={photo.url}>
                            <Image alt={'Post-Image'} height={photo.height} src={photo.url} width={photo.width} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </PostImageWrapper>
    )
}
