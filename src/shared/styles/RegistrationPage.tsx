import styled from 'styled-components'

export const AuthPageStyled = styled.div`
      display: flex;
      flex-direction: column;
      gap: 17px;
  
        h1 {
            font-family: Inter, sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 36px;

            color: ${props => props.theme.textColor[100]};
        }
        form {
          display: flex;
          flex-direction: column;
            
          a {
            text-align: right;
            margin-bottom: 30px;
          } 
        }
  
        .oauthWrapper {
            display: flex;
            justify-content: center;
            gap: 60px;
          
        }
    }

    .createNewPassForm {
      
        p{
          margin-bottom: 20px;
          color: ${props => props.theme.textColor[900]};
        }
      
    }
      
`
export const RegistrationModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;

    span {
        color: ${props => props.theme.palette.success['100']};
        font-weight: bold;
        font-size: 20px;
    }
`
