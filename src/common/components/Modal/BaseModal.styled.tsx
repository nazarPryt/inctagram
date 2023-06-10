import styled from 'styled-components'

export const ModalWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;

    &.open {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    }
`
export const ModalContent = styled.div`
    padding: 12px 24px;
    background-color: ${props => props.theme.palette.dark['300']};
    width: 378px;
    overflow: auto;
    box-shadow: 0 0 70px 10px #000;
    border: 1px solid ${props => props.theme.palette.dark['100']};
    transform: scale(0.5);
    color: ${props => props.theme.textColor};
    transition: 1s linear;

    &.open {
        transform: scale(1);
        transition: 1s linear;
    }
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: inherit;
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid ${props =>
          props.theme.name === 'dark' ? props.theme.palette.dark['100'] : props.theme.palette.light['100']};
`
