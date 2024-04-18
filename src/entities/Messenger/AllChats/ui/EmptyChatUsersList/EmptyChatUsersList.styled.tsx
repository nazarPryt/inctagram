import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const EmptyChatUsersListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        ${typography.H3}
    }

    p {
        ${typography.regular_text_14}
    }
`
