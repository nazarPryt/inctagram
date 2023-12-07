import Image from 'next/image'
import {PostImageWrapper} from 'entities/Post/ui/PostImage/PostImage.styled'
import {Swiper, SwiperSlide} from 'swiper/react'
import {PostCardImageType} from 'entities/UserPosts/api/types'
import {A11y, Autoplay, Navigation, Pagination, Keyboard} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const PostImage = (props: {images: PostCardImageType[]}) => {
    return (
        <PostImageWrapper>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                keyboard={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                autoplay={{
                    delay: 7000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
            >
                {props.images.map(photo => {
                    return (
                        <SwiperSlide key={photo.uploadId}>
                            <Image src={photo.url} alt={'Post-Image'} height={photo.height} width={photo.width} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </PostImageWrapper>
    )
}
