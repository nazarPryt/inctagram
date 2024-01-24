import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const CurrentSubscriptionWrapper = styled.div`
    .container {
        flex-direction: row;
    }

    .block {
        margin-right: 50px;
    }

    .name {
        align-self: flex-start;
        color: ${props => props.theme.textColor['900']};
        ${props => props.theme.typography.regular_text_14};
    }

    .date {
        align-self: flex-start;
        color: ${props => props.theme.textColor['100']};
        ${props => props.theme.typography.bold_text_14};
    }
`
