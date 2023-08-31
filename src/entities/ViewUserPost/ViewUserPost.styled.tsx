import styled from 'styled-components'

export const ViewUserPostWrapper = styled.div`
  display: flex;
  justify-content: center;

  aspect-ratio: 16/9;
  width: 100%;
  min-width: 300px;
  max-width: calc(100vw - 64px - 64px);
  max-height: calc(100vh - 70px);

  .left {
    overflow: hidden;
    display: flex;
    justify-content: center;

    width: 56%;
    min-width: 300px;
    height: 100%;
    min-height: 450px;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-width: 360px;
    max-width: 500px;
    min-height: 450px;
    padding: 0 15px;

    background-color: ${props => props.theme.bodyColor[300]};
  }
`
