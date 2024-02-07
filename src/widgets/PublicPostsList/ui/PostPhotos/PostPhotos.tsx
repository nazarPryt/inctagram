import {AllPostsTypeItemsImages} from '@/entities/Post/api/all-posts-api.type'
import Image from 'next/image'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostPhotosStyled} from './PostPhotos.styled'

export const PostPhotos = ({images}: {images: AllPostsTypeItemsImages[]}) => {
    return (
        <PostPhotosStyled>
            <Swiper
                className={'swiperWrapper'}
                keyboard
                modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                slidesPerView={1}
                spaceBetween={0}
            >
                {images.map((photo, index) => {
                    if (photo.height === 360) {
                        return (
                            <SwiperSlide className={'slide'} key={index}>
                                <Image
                                    alt={'Picture of the author'}
                                    height={photo.height}
                                    src={photo.url}
                                    width={photo.width}
                                />
                            </SwiperSlide>
                        )
                    }
                })}
            </Swiper>
        </PostPhotosStyled>
    )
}
