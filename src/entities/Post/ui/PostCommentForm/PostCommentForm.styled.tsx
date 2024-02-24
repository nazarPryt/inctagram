import styled from 'styled-components'

export const PostCommentFormWrapper = styled.div`
    & > button {
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        background-color: inherit;
        border: none;
        color: ${props => props.theme.textColor['900']};
    }
    form {
        display: flex;
        align-items: center;
        gap: 20px;

        textarea {
            background-color: inherit;
            min-height: 20px;
        }
    }
`
