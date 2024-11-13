import {breakpoints} from '@/shared/styles/Breakpoints'
import styled from 'styled-components'

export const NotificationWrapper = styled.div`
    width: 371px;

    h3 {
        border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
        padding-bottom: 5px;
    }
    @media (max-width: ${breakpoints.mobileSmall}px) {
        width: 250px;
    }
`
