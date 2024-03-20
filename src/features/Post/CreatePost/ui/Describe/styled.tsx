import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const DescribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;

    .headerBlock {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;

        span {
            ${typography.Bold_text_16}
        }
    }

    div {
        label {
            top: -5px;
            color: ${props => props.theme.textColor[900]};
        }

        textarea {
            background-color: ${props => props.theme.bodyColor[700]};
            color: ${props => props.theme.textColor[700]};
            height: 140px;
        }
    }
    .footer {
        justify-self: flex-end;
    }
`
