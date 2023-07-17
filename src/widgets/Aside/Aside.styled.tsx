import styled from 'styled-components'

export const AsideWrapper = styled.aside`
    position: sticky;
    top: 87px;
    height: calc(100vh - 100px);
    border-right: 1px solid ${props => props.theme.palette.dark['300']};

    nav {
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
    nav a:nth-child(6) {
        margin-top: 60px;
    }
    button:last-child {
        margin-top: 180px;
        padding: 0;
    }
`
