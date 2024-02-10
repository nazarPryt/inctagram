import {Card} from '@/shared/ui/Card/Card'
import styled from 'styled-components'

export const CurrentDeviceStyled = styled(Card)`
    display: flex;
    align-items: center;
    gap: 20px;

    .deviceIcon {
        width: 36px;
        height: 36px;
    }
    path {
        fill: ${props => props.theme.textColor[300]};
    }

    .deviceData {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 10px;
    }

    .isOnline {
        color: ${props => props.theme.palette.primary[300]};
    }

    .isOffline {
        color: red;
    }
`
