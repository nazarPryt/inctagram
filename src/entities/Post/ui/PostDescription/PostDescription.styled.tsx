import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const PostDescriptionStyled = styled.div`
    display: flex;
    gap: 10px;
    margin: 0 10px 10px 0;
    border-radius: 10px;
    padding: 10px 5px;

    .content {
        flex: 1;
    }

    a {
        ${typography.bold_text_14}
        text-decoration: none;
        color: ${props => props.theme.textColor[100]};
        margin-right: 10px;
    }

    p {
        ${typography.regular_text_14}
        margin-bottom: 10px;
    }
`
