import styled from 'styled-components'

export const AccountManagementContainer = styled.div`
    padding: 20px;

    margin: 20px 0;
    border: 1px solid ${props => props.theme.bodyColor['300']};
    background-color: ${props => props.theme.bodyColor['500']};

    svg {
        margin-right: 5px;
    }

    label:not(:last-child) {
        margin-bottom: 24px;
    }
`
