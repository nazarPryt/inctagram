import {ComponentPropsWithoutRef} from 'react'

import Image from 'next/image'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostByIdTypeImages} from '../../api/getPost.types'
import {ViewUserPostSliderWrapper} from './ViewUserPostSlider.styled'

type PropsType = {
    images: PostByIdTypeImages[]
} & ComponentPropsWithoutRef<'div'>

export const ViewUserPostSlider = ({className, images}: PropsType) => {
    return (
        <ViewUserPostSliderWrapper className={className}>
            <Swiper
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className={'swiper'}
                grabCursor
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
                        <SwiperSlide className={'swiper-slide'} key={photo.uploadId}>
                            <Image
                                alt={'Post-Image'}
                                height={photo.height}
                                priority
                                src={photo.url}
                                width={photo.width}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </ViewUserPostSliderWrapper>
    )
}
