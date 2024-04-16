import {IconColor, typography} from '@nazar-pryt/inctagram-ui-kit'
import styled, {css} from 'styled-components'

export const MessageStyled = styled.div<{$owner?: boolean}>`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 30px;

    .avatar {
        width: 50px;
        height: 50px;
    }
    .messageContent {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        p {
            background-color: ${props => props.theme.bodyColor[300]};
            color: ${props => props.theme.textColor[100]};
            padding: 10px 20px;
            border-radius: 0 10px 10px 10px;
            max-width: max-content;
        }
        span {
            ${typography.small_text}
            svg {
                fill: 'red';
            }
        }
    }

    ${props => {
        if (props.$owner) {
            return css`
                flex-direction: row-reverse;

                .messageContent {
                    align-items: flex-end;
                    p {
                        background-color: ${props => props.theme.palette.primary[300]};
                        border-radius: 10px 10px 0 10px;
                        color: white;
                    }
                }
            `
        }
    }}
`
