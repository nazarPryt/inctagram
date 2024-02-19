import {PostImageWrapper} from '@/entities/Post/ui/PostImage/PostImage.styled'
import styled from 'styled-components'

export const ViewUserPostSliderWrapper = styled(PostImageWrapper)`
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`
