import React, {ComponentPropsWithoutRef} from 'react'
import {ViewUserPostSliderWrapper} from 'entities/ViewUserPost/ui/ViewUserPostSlider/ViewUserPostSlider.styled'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {PostByIdImages} from 'entities/ViewUserPost/api/type'
import {A11y, Autoplay, Navigation, Pagination, Keyboard} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type PropsType = {
    images: PostByIdImages[]
} & ComponentPropsWithoutRef<'div'>

export const ViewUserPostSlider = ({className, images}: PropsType) => {
    return (
        <ViewUserPostSliderWrapper className={className}>
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
                {images.map(photo => {
                    return (
                        <SwiperSlide key={photo.uploadId}>
                            <Image src={photo.url} alt={'Post-Image'} height={photo.height} width={photo.width} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </ViewUserPostSliderWrapper>
    )
}
