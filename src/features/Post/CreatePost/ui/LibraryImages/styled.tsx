import styled, {css} from 'styled-components'

export const LibraryWrapper = styled.div<{$countPictures: number}>`
    display: ${props => (props.hidden ? 'flex' : 'none')};
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.bodyColor[500]};
    padding: 10px;
    position: absolute;
    right: 0;
    top: -105px;
    max-width: 410px;

    overflow: hidden;

    div {
        display: flex;
        align-items: center;
        position: relative;
        height: 80px;
    }

    .close {
        justify-content: center;
        background-color: ${props => props.theme.bodyColor[500]};
        position: absolute;
        right: 8px;
        top: 0;
    }

    button {
        width: 20px;
        height: 20px;
        padding: 0;
    }

    label {
        display: none;
    }

    .OVER {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 10px;
        overflow-x: scroll;
        height: 100px;
        margin: 10px;

        div {
            display: flex;
            width: 100px;
            height: 100%;
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute;
    }

    ${props =>
        props.$countPictures > 4 &&
        css`
            .swiper-button-next {
                position: absolute;
                top: 45px;
                right: 12px;
                height: 25px;
                width: 25px;
                border-radius: 50%;
                background: snow;
            }

            .swiper-button-next:before,
            .swiper-button-next:after {
                content: '';
                position: absolute;
                background-color: gray;
                width: 10px;
                height: 2px;
                border-radius: 5px;
            }
            .swiper-button-next:before {
                top: 8px;
                transform: rotate(45deg);
            }
            .swiper-button-next:after {
                transform: rotate(135deg);
                bottom: 8px;
            }

            //~~~~swiper-button-prev
            .swiper-button-prev {
                position: absolute;
                top: 45px;
                left: 3px;
                height: 25px;
                width: 25px;
                border-radius: 50%;
                background: snow;
            }

            .swiper-button-prev:before,
            .swiper-button-prev:after {
                content: '';
                position: absolute;
                background-color: gray;
                width: 10px;
                height: 2px;
                border-radius: 5px;
            }
            .swiper-button-prev:before {
                top: 8px;
                transform: rotate(315deg);
            }
            .swiper-button-prev:after {
                transform: rotate(225deg);
                bottom: 8px;
            }
        `}
`

export const LibraryPicture = styled.div<{filter: string; image: string}>`
    width: 80px;
    height: 80px;
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: ${props => props.filter};
    cursor: pointer;
`
