import styled from 'styled-components'

export const CreatePostPanelWrapper = styled.div`
  width: 250px;
  height: 100px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    div > label {
      min-width: 225px;
      text-align: center;
    }

    button {
      min-width: 225px;
    }
  }
`
