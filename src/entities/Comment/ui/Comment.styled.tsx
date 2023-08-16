import styled from 'styled-components'

export const CommentWrapper = styled.li`
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px 5px;
    background-color: ${props => props.theme.bodyColor[500]};

    .content {
        flex: 1;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: ${props => props.theme.textColor[100]};
    }

    p {
        margin: 10px 0;
    }

    .likeButton {
        align-self: center;
    }

    .footer {
        display: flex;
        gap: 10px;
        color: ${props => props.theme.textColor[900]};
    }
`
