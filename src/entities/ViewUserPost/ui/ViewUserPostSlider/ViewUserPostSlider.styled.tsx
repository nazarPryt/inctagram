import styled from 'styled-components'
import {PostImageWrapper} from 'entities/Post/ui/PostImage/PostImage.styled'

export const ViewUserPostSliderWrapper = styled(PostImageWrapper)`
    height: 100%;
    //background-color: green;
    img {
        height: 100%;
        object-fit: contain;
    }
`
