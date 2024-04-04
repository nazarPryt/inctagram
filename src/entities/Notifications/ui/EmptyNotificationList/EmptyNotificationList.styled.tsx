import {IconColor, typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const EmptyNotificationListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${IconColor}

    svg {
        width: 100px;
        height: 100px;
    }

    .title {
        ${typography.H3}
    }
    .subTitle {
        ${typography.H3}
    }
    p {
        ${typography.regular_text_14}
    }
`
