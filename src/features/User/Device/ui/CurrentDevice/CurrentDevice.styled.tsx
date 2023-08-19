import styled from 'styled-components'

export const CurrentDeviceStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin-bottom: 15px;
    background-color: ${props => props.theme.bodyColor[500]};
    border: 1px solid ${props => props.theme.bodyColor[300]};

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
