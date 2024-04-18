import styled from 'styled-components'

export const ViewUserPostSliderWrapper = styled.div`
    width: 1440px;

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
