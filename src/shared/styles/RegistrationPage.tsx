import styled from 'styled-components'

export const AuthPageStyled = styled.div`
  h1 {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;

    color: ${props => props.theme.textColor['100']};
    margin-top: 0;
    margin-bottom: 13px;
  }

  h1 + div {
    display: flex;
    justify-content: center;
    gap: 60px;

    margin-bottom: 22px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;

    input[type='password'] > button {
      width: 100%;
    }

    a {
      text-align: right;
      margin-bottom: 10px;
      color: inherit;
    }

    p {
      margin: 0;
    }

  }

}
`
export const RegistrationModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    font-weight: 400;
    font-size: 16px;
    line-height: 25px;

    span {
        color: ${props => props.theme.palette.success['100']};
        font-weight: bold;
        font-size: 20px;
    }
`
