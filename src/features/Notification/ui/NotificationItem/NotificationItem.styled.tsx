import styled from 'styled-components'

export const NotificationItemWrapper = styled.div`
  padding: 10px 0;
  border-top: 1px solid ${props => props.theme.bodyColor['100']};

  h4 {
    margin: 0 5px 10px 0;
  }

  span {
    line-height: ${props => props.theme.typography.lineHeightM};
  }

  div {
    display: flex;
  }

  p {
    color: ${props => props.theme.bodyColor[100]};
  }

  .new {
    color: ${props => props.theme.palette.primary[300]};
  }
`
