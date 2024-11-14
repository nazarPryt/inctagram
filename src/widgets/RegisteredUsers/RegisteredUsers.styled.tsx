import {breakpoints} from '@/shared/styles/Breakpoints'
import {Card, typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const RegisteredUsersStyled = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
        ${typography.H2}
    }

    .totalCountBox {
        display: flex;
        gap: 12px;
        background-color: ${props => props.theme.bodyColor[700]};
        outline: 1px solid ${props => props.theme.bodyColor[300]};
        border-radius: 2px;
        padding: 12px;
        ${typography.H2}

        span {
            border-right: 2px solid ${props => props.theme.bodyColor[300]};
            padding-right: 12px;
        }
        span:last-child {
            border: none;
            padding: 0;
        }
    }
    @media (max-width: ${breakpoints.mobileSmall}px) {
        flex-direction: column;
        gap: 10px;
    }
`
