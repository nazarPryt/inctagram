import {PostImageWrapper} from '@/entities/Post/ui/PostImage/PostImage.styled'
import styled from 'styled-components'

export const ViewUserPostSliderWrapper = styled(PostImageWrapper)`
    .slide {
        & img {
            object-fit: cover;
        }
    }
`
