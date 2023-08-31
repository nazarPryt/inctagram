import styled from 'styled-components'

import { typography } from '_app/themes/mixins'

export const AsideWrapper = styled.aside`
  position: sticky;
  top: 79px;
  height: calc(100vh - 100px);
  border-right: 1px solid ${props => props.theme.bodyColor['100']};

  ${typography.Medium_text_14()}

  nav {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  nav a:nth-child(6) {
    margin-top: 60px;
  }
  button:last-child {
    margin-top: 180px;
    padding: 0;
  }
`
