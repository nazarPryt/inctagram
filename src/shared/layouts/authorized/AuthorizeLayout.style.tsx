import styled from 'styled-components'

export const AuthorizedLayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-areas: 'header header header' 'aside section section' 'aside section section';

    header {
        grid-area: header;

        .BurgerMenu {
            display: none;
        }
    }
    aside {
        grid-area: aside;
    }

    section {
        grid-area: section;
        margin-left: 20px;
    }

    @media (max-width: ${props => props.theme.viewPort[768]}px) {
        grid-template-columns: 1fr;
        grid-template-areas: 'header' 'section';

        aside {
            display: none;
        }
        header {
            .BurgerMenu {
                display: block;
            }
        }
        section {
            margin: 0;
        }
    }
`
