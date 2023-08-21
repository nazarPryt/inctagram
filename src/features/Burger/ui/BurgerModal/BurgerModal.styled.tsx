import styled, {keyframes} from 'styled-components'

import * as SheetPrimitive from '@radix-ui/react-dialog'
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
export const SheetOverlayStyled = styled(SheetPrimitive.Overlay)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    inset: 0;
    background-color: rgb(0 0 0 / 80%);
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
export const SheetContentStyled = styled(SheetPrimitive.Content)`
    top: 0;
    bottom: 0;
    left: 0;
    border-right-width: 1px;
    width: 75%;
    height: 100%;
    position: fixed;
    z-index: 50;
    padding: 1.5rem;
    gap: 1rem;
    background-color: ${props => props.theme.bodyColor[100]};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    animation: ${contentShow} 150ms step-end(0.16, 1, 0.3, 1);

    @media (min-width: 640px) {
        max-width: 24rem;
    }
`
export const SheetCloseStyled = styled(SheetPrimitive.Close)`
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 0.125rem;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    opacity: 0.9;

    span {
        position: absolute;
        right: -52px;
        top: 0;
        width: 32px;
        height: 32px;
        opacity: 0.9;
    }
    span:hover {
        opacity: 1;
    }
    span:before,
    span:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 4px;
        background-color: ${props => props.theme.textColor[100]};
    }
    span:before {
        transform: rotate(45deg);
    }
    span:after {
        transform: rotate(-45deg);
    }
`
export const SheetHeaderStyled = styled.div`
    display: flex;
    margin-top: 0.5rem;
    flex-direction: column;
    text-align: center;

    @media (min-width: 640px) {
        text-align: left;
    }
`
export const SheetFooterStyled = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 640px) {
        margin-left: 0.5rem;
        flex-direction: row;
        justify-content: flex-end;
    }
`
export const SheetTitleStyled = styled(SheetPrimitive.Title)`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
`
export const SheetDescriptionStyled = styled(SheetPrimitive.Description)`
    font-size: 0.875rem;
    line-height: 1.25rem;
`
