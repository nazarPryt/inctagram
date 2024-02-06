import {PublicPostsTypeItemsImages} from '@/widgets/PublicPostsList/api/publicPosts.type'
import Image from 'next/image'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostPhotosStyled} from './PostPhotos.styled'

type PostItemType = {
    photos: PublicPostsTypeItemsImages[]
}
export const PostPhotos = ({photos}: PostItemType) => {
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
                {photos.map((photo, index) => {
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
