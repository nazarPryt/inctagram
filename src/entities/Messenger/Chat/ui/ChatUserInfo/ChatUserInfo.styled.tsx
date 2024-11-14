import {breakpoints} from '@/shared/styles/Breakpoints'
import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'
import {isBindingOrAssignmentElementRestIndicator} from 'ts-api-utils'

export const ChatUserInfoStyled = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: ${props => props.theme.bodyColor[500]};
    ${typography.regular_text_16}
    padding: 10px;

    a {
        ${typography.bold_text_14}
        color: ${props => props.theme.textColor[100]};
    }

    .backButton {
        display: none;
    }
    @media (max-width: ${breakpoints.mobile}px) {
        .backButton {
            display: inline-block;
        }
    }
`
