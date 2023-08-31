import styled from 'styled-components'

export const UserAvatarStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 192px;
  border-radius: 50%;
  margin-bottom: 30px;
  background-color: ${props => props.theme.bodyColor['500']};

  .avatar {
    position: relative;

    img {
      border-radius: 50%;
    }

    button {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }
`
