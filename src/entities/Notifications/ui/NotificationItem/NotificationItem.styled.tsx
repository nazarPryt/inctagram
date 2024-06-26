import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const NotificationItemWrapper = styled.div`
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
    padding: 10px;
    margin-right: 5px;

    &:hover {
        outline: 1px solid ${props => props.theme.palette.primary['500']};
        background-color: ${props => props.theme.bodyColor['500']};
        border-radius: 5px;
    }
    h4 {
        margin: 0 5px 10px 0;
    }

    div {
        display: flex;
    }

    .text {
        ${typography.Medium_text_14}
        text-wrap: pretty;
    }

    .new {
        color: ${props => props.theme.palette.primary[300]};
    }
    .notifyAt {
        ${typography.small_text}
        color: ${props => props.theme.textColor[900]};
    }
    .deleteBtn {
        position: absolute;
        top: 0;
        right: 0;
    }
`
