import styled from 'styled-components'

export const EditorButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.bodyColor['300']};
    width: 100%;
    top: 0;
    left: 0;
    height: 20px;
    padding: 0 10px;

    span {
        font-weight: 700;
        font-size: 20px;
    }
`
