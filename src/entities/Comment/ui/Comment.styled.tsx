import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const CommentWrapper = styled.li`
    display: flex;
    gap: 15px;
    margin: 0 10px 10px 0;
    border-radius: 10px;
    padding: 10px 5px;

    .content {
        flex: 1;

        a {
            text-decoration: none;
            margin-right: 10px;
            ${typography.bold_text_14}
            color: ${props => props.theme.textColor[100]};
        }

        p {
            margin-bottom: 10px;
            ${typography.regular_text_14}
        }
    }

    .likeButton {
        align-self: center;
    }

    .footer {
        display: flex;
        gap: 10px;
        ${typography.small_text}
        color: ${props => props.theme.textColor[900]};
    }
`
