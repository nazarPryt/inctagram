import React, {RefObject} from 'react'
import AvatarEditor from 'react-avatar-editor'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {Wrapper} from './styled'

type CanvasContainerType = {
    editorRef: RefObject<AvatarEditor>
    prepareImageToSend: (img: string, filter: string) => void
}

export const CanvasContainer: React.FC<CanvasContainerType> = props => {
    const {previewImage, previewFilter, defaultWidth, defaultHeight, libraryPictures} = useAppSelector(
        state => state.createPost
    )

    const handlePrepareImage = () => {
        props.prepareImageToSend(previewImage, previewFilter)
    }
    console.log(libraryPictures)
    return (
        <Wrapper width={defaultWidth} height={defaultHeight}>
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
                {libraryPictures.map(img => {
                    return (
                        <SwiperSlide key={img.id}>
                            <AvatarEditor
                                ref={props.editorRef}
                                image={img.img}
                                width={defaultWidth}
                                height={defaultHeight}
                                scale={+img.zoom}
                                border={0}
                                onImageReady={handlePrepareImage}
                                style={{
                                    filter: previewFilter,
                                }}
                                disableHiDPIScaling={true}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Wrapper>
    )
}
