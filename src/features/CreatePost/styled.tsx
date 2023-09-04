import styled from 'styled-components'

export const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px;
`

export const EmptyImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 250px;
    margin-bottom: 25px;
    background-color: #171717;
`

export const EditorWrapper = styled.div<{$isAddPhoto: boolean}>`
    display: flex;
    justify-content: center;
    gap: 25px;
    position: relative;
    object-fit: contain;
    flex-direction: ${props => (props.$isAddPhoto ? 'column' : 'row')};
    align-items: ${props => (props.$isAddPhoto ? 'center' : 'inherit')};
`
