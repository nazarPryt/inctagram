import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const EmptySearchUserListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    h3 {
        ${typography.H3}
    }

    p {
        ${typography.regular_text_16}
    }
`
