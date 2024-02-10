import {IconButton} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const LikeCommentWrapper = styled(IconButton)`
    path {
        fill: ${props => props.theme.textColor[300]};
    }
`
