import {PATH} from '@/_app/AppSettings/PATH'
import {AllPostsTypeItemsImages} from '@/entities/Post/api/allPosts.types'
import Image from 'next/image'
import Link from 'next/link'
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import {PostPhotosStyled} from './PostPhotos.styled'

type PropsType = {
    images: AllPostsTypeItemsImages[]
    ownerId: number
    postId: number
}
export const PostPhotos = ({images, ownerId, postId}: PropsType) => {
    const photosToShow = images.filter(photo => photo.height === 360)

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
                {photosToShow.map((photo, index) => {
                    return (
                        <SwiperSlide className={'slide'} key={index}>
                            <Link href={`${PATH.PUBLIC.PROFILE}/${ownerId}/${postId}`}>
                                <Image
                                    alt={'Picture of the author'}
                                    height={photo.height}
                                    src={photo.url}
                                    width={photo.width}
                                />
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </PostPhotosStyled>
    )
}
