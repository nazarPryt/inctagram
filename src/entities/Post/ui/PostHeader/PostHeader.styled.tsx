import styled from 'styled-components'

export const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .PostHeader {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    .link {
      position: relative;

      font-size: 16px;
      font-weight: 600;
      color: ${props => props.theme.textColor[100]};
      text-decoration: none;

      &::after {
        content: '';

        position: absolute;
        top: 5px;
        right: -15px;

        width: 8px;
        height: 8px;

        background-color: ${props => props.theme.textColor[100]};
        border-radius: 50%;
      }
    }
  }
`
