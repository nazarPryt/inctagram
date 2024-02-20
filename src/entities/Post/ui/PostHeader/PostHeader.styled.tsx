import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const PostHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .PostHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        .link {
            text-decoration: none;
            ${typography.H3}
            color: ${props => props.theme.textColor[100]};
        }
        .dot {
            position: relative;
            width: 5px;
            height: 5px;

            &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: ${props => props.theme.textColor[100]};
            }
        }
        .day {
            ${typography.small_text}
            color: ${props => props.theme.textColor[900]};
        }
    }
`
