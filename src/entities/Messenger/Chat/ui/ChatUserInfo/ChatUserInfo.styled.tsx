import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const ChatUserInfoStyled = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: ${props => props.theme.bodyColor[500]};
    ${typography.regular_text_16}
    padding: 10px;
`
