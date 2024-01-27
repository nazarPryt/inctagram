import styled from 'styled-components'

export const NotificationIconWrapper = styled.div`
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.palette.danger['500']};
        position: absolute;
        top: 4px;
        color: white;
        right: 8px;
        width: 13px;
        border-radius: 50%;
        height: 13px;
    }

    button {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;

        &:active {
            path {
                fill: ${props => props.theme.palette.primary['500']};
            }
        }
    }
`
