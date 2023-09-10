import {LibraryPictureType} from 'features/CreatePost/model/types/createPostSchema'
import React, {RefObject, useEffect} from 'react'
import AvatarEditor from 'react-avatar-editor'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {A11y, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import {useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {Wrapper} from './styled'

type CanvasContainerType = {
    editorRef: RefObject<AvatarEditor>
    prepareImageToSend: (img: string, filter: string) => void
}

export const CanvasContainer: React.FC<CanvasContainerType> = props => {
    const {defaultWidth, defaultHeight, libraryPictures} = useAppSelector(state => state.createPost)
    return (
        <Wrapper width={defaultWidth} height={defaultHeight}>
            <Swiper
                modules={[Navigation, Pagination, A11y, Keyboard]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                keyboard
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
            >
                {libraryPictures.map(img => {
                    return (
                        <SwiperSlide key={img.id}>
                            <SlideComponent
                                img={img}
                                prepareImageToSend={props.prepareImageToSend}
                                editorRef={props.editorRef}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Wrapper>
    )
}

type SlidePropsType = {
    img: LibraryPictureType
    editorRef: RefObject<AvatarEditor>
    prepareImageToSend: (img: string, filter: string) => void
}

const SlideComponent = ({img, editorRef, prepareImageToSend}: SlidePropsType) => {
    const swiper = useSwiper()

    const {previewImage, previewFilter, defaultWidth, defaultHeight, libraryPictures, currentImageId} = useAppSelector(
        state => state.createPost
    )

    const handlePrepareImage = () => {
        prepareImageToSend(previewImage, previewFilter)
    }

    useEffect(() => {
        const imageIndex = libraryPictures.findIndex(picture => picture.id === currentImageId)
        swiper.slideTo(imageIndex)
    }, [currentImageId])

    return (
        <AvatarEditor
            ref={editorRef}
            width={defaultWidth}
            image={img.img}
            height={defaultHeight}
            scale={+img.zoom}
            border={0}
            onImageReady={handlePrepareImage}
            style={{
                filter: img.filter,
            }}
            disableHiDPIScaling={true}
        />
    )
}
