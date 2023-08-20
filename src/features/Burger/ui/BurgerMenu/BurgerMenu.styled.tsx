import styled from 'styled-components'
import * as SheetPrimitive from '@radix-ui/react-dialog'

export const SheetOverlayStyled = styled(SheetPrimitive.Overlay)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
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
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    @media (min-width: 640px) {
        max-width: 24rem;
    }
`
export const SheetCloseStyled = styled(SheetPrimitive.Close)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 0.125rem;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    opacity: 0.7;

    span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    :hover {
        opacity: 1;
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
