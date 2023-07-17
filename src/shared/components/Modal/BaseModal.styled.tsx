import styled from 'styled-components'

export const ModalWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99;

    &.open {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    }
`
export const ModalContent = styled.div`
  background-color: ${props => props.theme.palette.dark['300']};
  min-width: 436px;
  overflow: auto;
  box-shadow: 0 0 70px 10px #000;
  border: 1px solid ${props => props.theme.palette.dark['100']};
  transform: scale(0.5);
  color: ${props => props.theme.palette.common.white};
  transition: 1s linear;
  position: relative;

  &.open {
    transform: scale(1);
    transition: 1s linear;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    padding: 12px 24px 0 24px;
  }


  .line {
    width: 100%;
    color: ${props =>
        props.theme.name === 'dark' ? props.theme.palette.dark['100'] : props.theme.palette.light['100']};
`
