import { typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const PostDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${typography.regular_text_14}

  .day {
    ${typography.small_text}
    color: ${props => props.theme.textColor[900]}
  }
`
