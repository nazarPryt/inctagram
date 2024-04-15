import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const ChatUserItemStyled = styled.div`
    display: flex;
    gap: 20px;

    .userName {
        ${typography.regular_text_14}
    }
    .lastMessage {
        ${typography.small_text}
        color : ${props => props.theme.textColor[900]}
    }
`
