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
            
          .link {
            color: ${props => props.theme.textColor[900]};
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
