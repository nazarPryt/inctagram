import styled from 'styled-components'

export const LibraryWrapper = styled.div`
  position: absolute;
  top: -135px;
  right: 0;

  overflow: hidden;
  display: ${props => (props.hidden ? 'flex' : 'none')};
  gap: 10px;
  align-items: center;

  max-width: 475px;
  padding: 5px;

  background-color: ${props => props.theme.bodyColor[500]};

  div {
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;

    justify-content: center;

    background-color: ${props => props.theme.bodyColor[500]};
  }

  button {
    width: 20px;
    height: 20px;
    padding: 0;
  }

  label {
    display: none;
  }

  .OVER {
    overflow-x: scroll;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;

    height: 100px;
    margin: 10px;

    div {
      display: flex;
      width: 100px;
      height: 100%;
    }
  }
`

export const LibraryPicture = styled.div<{ image: string; filter: string }>`
  cursor: pointer;

  width: 80px;
  height: 80px;

  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: ${props => props.filter};
`
