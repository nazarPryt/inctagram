import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

export const ViewUserPostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 0;

  border-bottom: 1px solid ${props => props.theme.bodyColor[100]};

  .avaLink {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    .link {
      position: relative;

      font-size: 16px;
      font-weight: 600;
      color: ${props => props.theme.textColor[100]};
      text-decoration: none;
    }
  }
`
const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 101;
  inset: 0;

  background-color: rgb(0 0 0 / 80%);

  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  z-index: 105;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 378px;

  background: var(--dark-300, #333);
  border: 1px solid var(--dark-100, #4c4c4c);
  border-radius: 2px;

  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  /* max-height: 90vh; 
  max-width: 90vw; */
`
export const DialogClose = styled(Dialog.Close)`
  cursor: pointer;

  position: absolute;
  top: 24px;
  right: 24px;

  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;
`

export const DialogTitle = styled(Dialog.Title)`
  align-items: center;
  justify-content: space-between;

  height: 72px;
  padding: 24px;

  border-bottom: 1px solid var(--dark-100, #4c4c4c);
`
export const DialogDescription = styled.div`
  padding: 30px 24px;
`
