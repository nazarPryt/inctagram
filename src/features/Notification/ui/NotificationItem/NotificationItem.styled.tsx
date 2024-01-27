import styled from 'styled-components'

export const NotificationItemWrapper = styled.div`
    border-top: 1px solid ${props => props.theme.bodyColor['100']};
    padding: 10px 0;

    h4 {
        margin: 0 5px 10px 0;
    }

    div {
        display: flex;
    }

    p {
        color: ${props => props.theme.bodyColor[100]};
    }

    .new {
        color: ${props => props.theme.palette.primary[300]};
    }
`
