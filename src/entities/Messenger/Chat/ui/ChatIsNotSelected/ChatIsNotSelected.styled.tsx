import {IconColor, typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const ChatIsNotSelectedStyled = styled.div`
    flex: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h3 {
        ${typography.H1}
    }
    span {
        ${IconColor}
        svg {
            width: 100px;
            height: 100px;
        }
    }
`
