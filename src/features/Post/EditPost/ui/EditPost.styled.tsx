import styled from 'styled-components'

export const EditPostWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;

  width: 40%;
  min-width: 200px;
  padding: 0 15px;

  background-color: ${props => props.theme.bodyColor[300]};

  .textArea {
    min-height: 130px;
    color: ${props => props.theme.textColor[700]};
    background-color: ${props => props.theme.bodyColor[700]};

    label {
      color: red;
    }
  }

  .buttonsWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;

    button {
      align-self: end;
      justify-self: flex-end;
    }
  }
`
