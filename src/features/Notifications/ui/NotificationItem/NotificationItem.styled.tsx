import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const NotificationItemWrapper = styled.div`
    border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
    padding: 10px 0;
    margin-right: 5px;

    h4 {
        margin: 0 5px 10px 0;
    }

    div {
        display: flex;
    }

    .text {
        ${typography.Medium_text_14}
    }

    .new {
        color: ${props => props.theme.palette.primary[300]};
    }
    .createdAt {
        ${typography.small_text}
        color: ${props => props.theme.textColor[900]};
    }
`
