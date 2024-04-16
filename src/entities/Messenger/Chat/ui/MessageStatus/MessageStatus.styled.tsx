import {MessageStatusType} from '@/entities/Messenger/Chat/helpers/Chat.schema'
import styled, {css} from 'styled-components'

export const MessageStatusStyled = styled.span<{$status: MessageStatusType}>`
    svg {
        width: 25px;
        height: 25px;
    }
    ${props => {
        switch (props.$status) {
            case 'READ':
                return css`
                    svg {
                        path {
                            fill: #3174fa;
                        }
                    }
                `

            case 'RECEIVED':
                return css`
                    svg {
                        path {
                            fill: gray;
                        }
                    }
                `
            case 'SENT':
                return css`
                    svg {
                        path {
                            fill: gray;
                        }
                        :nth-child(2) {
                            display: none;
                        }
                    }
                `
        }
    }}
`
