import styled from 'styled-components'

export const NavButtonWrapper = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: inherit;
    color: inherit;
    border: none;
    padding: 0;

    &:hover {
        color: ${props => props.theme.palette.primary['100']};
        path {
            fill: ${props => props.theme.palette.primary['100']};
        }
    }

    path {
        fill: ${props =>
            props.theme.name === 'dark' ? props.theme.palette.common.white : props => props.theme.palette.common.black};
    }
`
