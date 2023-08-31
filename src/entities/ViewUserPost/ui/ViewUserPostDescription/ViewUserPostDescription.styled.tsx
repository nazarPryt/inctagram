import styled from 'styled-components'

export const ViewUserPostDescriptionWrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${props => props.theme.textColor[500]};

  span {
    align-self: flex-end;
    padding-right: 5px;
    color: ${props => props.theme.textColor[900]};
  }
`
