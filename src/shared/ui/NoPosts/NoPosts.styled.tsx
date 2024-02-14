import styled from 'styled-components'

export const NoPostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${props => props.theme.textColor[100]};

    svg {
        width: 200px;
        height: 200px;
    }
    path:nth-child(odd) {
        fill: ${props => props.theme.bodyColor[100]};
    }
    path:nth-child(even) {
        fill: ${props => props.theme.textColor[100]};
    }

    circle:nth-child(even) {
        fill: ${props => props.theme.palette.primary[100]};
    }
`
