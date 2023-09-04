import styled from 'styled-components'

export const AuthorizedLayoutWrapper = styled.div`
    display: grid;
    grid-template-areas: 'header header header' 'aside section section' 'aside section section';

    header {
        grid-area: header;

        .BurgerMenu {
            display: none;
        }
    }
    aside {
        width: 100%;
        max-width: 220px;
        min-width: 145px;
        grid-area: aside;
    }

    section {
        grid-area: section;
    }

    @media (max-width: ${props => props.theme.viewPort[768]}px) {
        aside {
            display: none;
        }
        header {
            .BurgerMenu {
                display: block;
            }
        }
    }
`
