import styled from 'styled-components'

export const CreatePostButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    background-color: inherit;
    color: inherit;
    border: none;
    padding: 0;

    &:hover {
        color: ${props => props.theme.palette.primary['100']};
        path {
            fill: ${props => props.theme.palette.primary['100']};
        }
    }

    path {
        fill: ${props =>
            props.theme.name === 'dark' ? props.theme.palette.common.white : props => props.theme.palette.common.black};
    }
`
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
    margin-bottom: 100px;
    background-color: #171717;
`

export const EditorWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    position: relative;
    object-fit: contain;
`
