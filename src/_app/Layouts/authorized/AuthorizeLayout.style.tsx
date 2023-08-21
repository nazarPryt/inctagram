import styled from 'styled-components'

export const AuthorizedLayoutWrapper = styled.div`
    display: flex;
    gap: 20px;

    aside {
        width: 100%;
        max-width: 220px;
        min-width: 145px;
    }

    section {
        flex: 1;
    }

    @media (max-width: ${props => props.theme.viewPort[768]}px) {
        aside {
            display: none;
        }
    }
`
