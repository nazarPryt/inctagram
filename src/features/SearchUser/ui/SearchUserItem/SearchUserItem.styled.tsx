import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const SearchUserItemStyled = styled.div`
    display: flex;
    gap: 20px;

    a {
        ${typography.H3}
        color: ${props => props.theme.textColor[100]}
    }
    h5 {
        ${typography.regular_text_14}
        color: ${props => props.theme.textColor[900]}
    }
`
