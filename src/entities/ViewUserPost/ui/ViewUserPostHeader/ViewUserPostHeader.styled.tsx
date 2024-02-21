import * as Dialog from '@radix-ui/react-dialog'
import styled, {keyframes} from 'styled-components'

export const ViewUserPostHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid ${props => props.theme.bodyColor[100]};
    margin-bottom: 15px;

    .avaLink {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        .link {
            position: relative;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            color: ${props => props.theme.textColor[100]};
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
    inset: 0;
    background-color: rgb(0 0 0 / 80%);
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 101;
`
export const DialogContent = styled(Dialog.Content)`
    width: 378px;

    border: 1px solid var(--dark-100, #4c4c4c);
    background: var(--dark-300, #333);
    border-radius: 2px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //max-width: 90vw;
    //max-height: 90vh;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 105;
`
export const DialogClose = styled(Dialog.Close)`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 24px;
    right: 24px;
    cursor: pointer;
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
