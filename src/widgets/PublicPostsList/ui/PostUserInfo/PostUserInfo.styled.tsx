import {typography} from '@nazar-pryt/inctagram-ui-kit'
import {styled} from 'styled-components'

export const PostUserInfoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    a {
        text-decoration: none;
        color: ${props => props.theme.textColor[100]};
        ${typography.H3}

        &:hover {
            text-decoration: underline;
        }
    }
`
