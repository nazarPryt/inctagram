import {breakpoints} from '@/shared/styles/Breakpoints'
import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const MobileHeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
    margin-bottom: 24px;
    z-index: 2;
    background-color: ${props => props.theme.bodyColor['700']};
    padding: 12px 0;

    .block {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    .logo {
        text-decoration: none;
        ${typography.Large};
        color: ${props => props.theme.textColor['100']};
    }
`
