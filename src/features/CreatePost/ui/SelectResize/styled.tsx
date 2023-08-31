import styled from 'styled-components'

export const SelectWrapper = styled.div`
  position: absolute;
  top: -135px;
  left: 0;

  display: ${props => (props.hidden ? 'flex' : 'none')};
  flex-direction: column;
  gap: 5px;

  width: 120px;
  padding: 10px;

  background-color: ${props => props.theme.bodyColor[500]};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
