import styled from 'styled-components'

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
    margin-bottom: 24px;
    z-index: 2;
    background-color: ${props => props.theme.bodyColor['700']};

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            padding: 12px 0;
            text-decoration: none;
            font-weight: 600;
            font-size: 26px;
            color: ${props => props.theme.textColor['100']};
        }
    }
`
