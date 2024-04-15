import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const ChatStyled = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;

    .chatInfo {
        display: flex;
        gap: 10px;
        align-items: center;
        background-color: ${props => props.theme.bodyColor[500]};
        ${typography.regular_text_16}
        padding: 10px;
    }
`
