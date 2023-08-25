import styled from 'styled-components'
import {typography} from '_app/themes/mixins'

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
    margin-bottom: 24px;
    z-index: 2;
    background-color: ${props => props.theme.bodyColor['700']};

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            padding: 12px 0;
            text-decoration: none;
            ${typography.Large()}
            color: ${props => props.theme.textColor['100']};
        }
    }

    @media (max-width: ${props => props.theme.viewPort[768]}px) {
        a {
            display: none;
        }
    }
`
