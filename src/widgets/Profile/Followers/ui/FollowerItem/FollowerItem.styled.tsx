import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const FollowerItemStyled = styled.div`
    display: flex;
    justify-content: space-between;

    .userInfo {
        display: flex;
        gap: 10px;
        align-items: center;

        a {
            ${typography.regular_text_16}
            color: inherit
        }
    }
    .buttonsGroup {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`
