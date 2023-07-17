import styled from 'styled-components'

export const CreatePostWrapper = styled.div`
    li {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 0 auto;
        list-style-type: none;
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
