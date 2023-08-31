import styled from 'styled-components'

export const EditorPanelWrapper = styled.div<{ width: number }>`
  position: absolute;
  z-index: 1;
  bottom: 30px;
  left: 9px;

  display: flex;
  gap: 50px;
  justify-content: space-around;

  width: ${props => props.width}px;

  .popUpBtn {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    width: 95%;

    .select,
    .zoom,
    .library {
      position: relative;

      width: 40px;
      height: 40px;
      padding: 5px;

      background-color: ${props => props.theme.bodyColor[500]};
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      width: 120px;
    }

    svg {
      path {
        fill: ${props => props.theme.textColor[500]};
      }
    }
  }
`
