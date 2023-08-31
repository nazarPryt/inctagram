import styled from 'styled-components'

export const CurrentSubscriptionWrapper = styled.div`
  .container {
    flex-direction: row;
  }

  .block {
    margin-right: 50px;
  }

  .name {
    align-self: flex-start;
    color: ${props => props.theme.textColor['900']};
    font-size: ${props => props.theme.typography.fontSizeM};
    font-weight: ${props => props.theme.typography.fontWeightMedium};
    line-height: ${props => props.theme.typography.lineHeightL};
  }

  .date {
    align-self: flex-start;
    color: ${props => props.theme.textColor['100']};
    font-size: ${props => props.theme.typography.fontSizeM};
    font-weight: ${props => props.theme.typography.fontWeightSemiBold};
    line-height: ${props => props.theme.typography.lineHeightL};
  }
`
