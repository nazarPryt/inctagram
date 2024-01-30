import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
    margin-bottom: 24px;
    z-index: 2;
    background-color: ${props => props.theme.bodyColor['700']};

    .block {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    a {
        padding: 12px 0;
        text-decoration: none;
        ${props => props.theme.typography.Large};

        color: ${props => props.theme.textColor['100']};
    }

    @media (max-width: ${props => props.theme.viewPort[768]}px) {
        a {
            display: none;
        }
    }
`
