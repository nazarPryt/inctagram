import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled, {css} from 'styled-components'

export const ChatUserItemStyled = styled.button<{$selected?: boolean}>`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 10px;

    &:hover {
        background-color: ${props => props.theme.bodyColor[300]};
        transition: 0.2s;
    }

    .box {
        display: flex;
        gap: 10px;
    }
    .userName {
        ${typography.regular_text_14}
    }
    .lastMessage {
        ${typography.small_text}
        color : ${props => props.theme.textColor[900]}
    }
    .createdAt {
        ${typography.small_text}
        color : ${props => props.theme.textColor[900]}
    }
    ${props => {
        if (props.$selected) {
            return css`
                background-color: ${props => props.theme.bodyColor[100]};
            `
        }
    }}
`
