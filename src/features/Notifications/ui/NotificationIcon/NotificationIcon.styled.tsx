import styled from 'styled-components'

export const NotificationIconWrapper = styled.span`
    position: relative;

    svg {
        width: 20px;
        height: 25px;
    }
    .count {
        background-color: ${props => props.theme.palette.danger['500']};
        position: absolute;
        top: -7px;
        color: white;
        right: -8px;
        width: 15px;
        border-radius: 50%;
        height: 15px;
    }
`
