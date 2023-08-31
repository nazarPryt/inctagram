import styled from 'styled-components'

export const ZoomWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 50px;

  display: ${props => (props.hidden ? 'flex' : 'none')};
  flex-direction: column;

  padding: 10px;

  background-color: ${props => props.theme.bodyColor[500]};

  input {
    width: 90px;
    height: 3px;
  }
`
