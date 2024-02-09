import {ComponentPropsWithoutRef} from 'react'

import Image from 'next/image'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostByIdTypeImages} from '../../api/type'
import {ViewUserPostSliderWrapper} from './ViewUserPostSlider.styled'

type PropsType = {
    images: PostByIdTypeImages[]
} & ComponentPropsWithoutRef<'div'>

export const ViewUserPostSlider = ({className, images}: PropsType) => {
    const imagesToShow = images.filter(img => img.width === 1440)

    return (
        <ViewUserPostSliderWrapper className={className}>
            <Swiper
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className={'Swiper'}
                keyboard
                modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                slidesPerView={1}
                spaceBetween={0}
            >
                {imagesToShow.map(photo => {
                    return (
                        <SwiperSlide className={'slide'} key={photo.uploadId}>
                            <Image alt={'Post-Image'} height={photo.height} src={photo.url} width={photo.width} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </ViewUserPostSliderWrapper>
    )
}
