import styled from 'styled-components'

export const PostImageWrapper = styled.div`
    //img {
    //    object-fit: contain;
    //}
    //~~~~swiper-button-next
    .swiper-button-next:before,
    .swiper-button-next:after {
        content: '';
        position: absolute;
        background-color: white;
        width: 30px;
        height: 5px;
        border-radius: 5px;
    }
    .swiper-button-next:before {
        top: 10px;
        transform: rotate(45deg);
    }
    .swiper-button-next:after {
        transform: rotate(135deg);
        bottom: 10px;
    }

    //~~~~swiper-button-prev
    .swiper-button-prev:before,
    .swiper-button-prev:after {
        content: '';
        position: absolute;
        background-color: white;
        width: 30px;
        height: 5px;
        border-radius: 5px;
    }
    .swiper-button-prev:before {
        top: 9px;
        transform: rotate(315deg);
    }
    .swiper-button-prev:after {
        transform: rotate(225deg);
        bottom: 9px;
    }
`
