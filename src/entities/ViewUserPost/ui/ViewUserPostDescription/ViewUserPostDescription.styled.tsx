import styled from 'styled-components'

export const ViewUserPostDescriptionWrapper = styled.p`
    display: flex;
    gap: 10px;
    flex-direction: column;
    color: ${props => props.theme.textColor[500]};

    span {
        padding-right: 5px;
        align-self: flex-end;
        color: ${props => props.theme.textColor[900]};
    }
`
