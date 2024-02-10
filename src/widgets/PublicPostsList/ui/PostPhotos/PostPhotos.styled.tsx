import {styled} from 'styled-components'

export const PostPhotosStyled = styled.div`
    overflow: hidden;
    margin-bottom: 5px;
    .swiperWrapper {
        height: 230px;
    }
    .slide {
    }

    //~~~~swiper-button-next
    .swiper-button-next:before,
    .swiper-button-next:after {
        content: '';
        position: absolute;
        background-color: white;
        width: 15px;
        height: 2px;
        border-radius: 5px;
    }
    .swiper-button-next:before {
        top: 17px;
        transform: rotate(45deg);
    }
    .swiper-button-next:after {
        transform: rotate(135deg);
        bottom: 17px;
    }

    //~~~~swiper-button-prev
    .swiper-button-prev:before,
    .swiper-button-prev:after {
        content: '';
        position: absolute;
        background-color: white;
        width: 15px;
        height: 2px;
        border-radius: 5px;
    }
    .swiper-button-prev:before {
        top: 17px;
        transform: rotate(315deg);
    }
    .swiper-button-prev:after {
        transform: rotate(225deg);
        bottom: 17px;
    }
`
