import {RefObject, useEffect} from 'react'
import AvatarEditor from 'react-avatar-editor'

import {createPostAC} from 'features/CreatePost/model/slice/createPostSlice'
import {LibraryPictureType} from 'features/CreatePost/model/types/createPostSchema'
import {A11y, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {Wrapper} from './styled'

type CanvasContainerType = {
    editorRef: RefObject<AvatarEditor>
    prepareImageToSend: (img: string, filter: string) => void
}

export const CanvasContainer = ({editorRef, prepareImageToSend}: CanvasContainerType) => {
    const dispatch = useAppDispatch()
    const {defaultHeight, defaultWidth, libraryPictures} = useAppSelector(state => state.createPost)

    const onSlideChangeHandler = (swiper: any) => {
        dispatch(createPostAC.setPreviewImage(libraryPictures[swiper.activeIndex].img))
    }

    return (
        <Wrapper height={defaultHeight} width={defaultWidth}>
            <Swiper
                keyboard
                modules={[Navigation, Pagination, A11y, Keyboard]}
                navigation
                onSlideChange={onSlideChangeHandler}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                slidesPerView={1}
                spaceBetween={0}
            >
                {libraryPictures.map(img => {
                    return (
                        <SwiperSlide key={img.id}>
                            <SlideComponent editorRef={editorRef} img={img} prepareImageToSend={prepareImageToSend} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Wrapper>
    )
}

type SlidePropsType = {
    editorRef: RefObject<AvatarEditor>
    img: LibraryPictureType
    prepareImageToSend: (img: string, filter: string) => void
}

const SlideComponent = ({editorRef, img, prepareImageToSend}: SlidePropsType) => {
    const swiper = useSwiper()

    const {currentImageId, defaultHeight, defaultWidth, libraryPictures, previewFilter, previewImage} = useAppSelector(
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
            border={0}
            disableHiDPIScaling
            height={defaultHeight}
            image={img.img}
            onImageReady={handlePrepareImage}
            ref={editorRef}
            scale={+img.zoom}
            style={{
                filter: img.filter,
            }}
            width={defaultWidth}
        />
    )
}
