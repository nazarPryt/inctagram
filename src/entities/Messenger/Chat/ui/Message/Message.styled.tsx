import styled, {css} from 'styled-components'

export const MessageStyled = styled.div<{$owner?: boolean}>`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    .messageInfo {
        display: flex;
        flex-direction: column;
        color: gray;
        font-weight: 300;
    }
    .messageContent {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
            background-color: ${props => props.theme.bodyColor[300]};
            color: ${props => props.theme.textColor[100]};
            padding: 10px 20px;
            border-radius: 0 10px 10px 10px;
            max-width: max-content;
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
                        border-radius: 10px 0 10px 10px;
                        color: white;
                    }
                }
            `
        }
    }}
`
