import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const AsideWrapper = styled.aside`
    position: sticky;
    top: 86px;
    height: calc(100vh - 100px);
    border-right: 1px solid ${props => props.theme.bodyColor['100']};

    nav {
        display: flex;
        flex-direction: column;
        gap: 22px;

        font-family: inherit;
        ${typography.Medium_text_14}
    }
    nav a:nth-child(6) {
        margin-top: 60px;
    }
    button:last-child {
        margin-top: 180px;
        padding: 0;
    }
`
