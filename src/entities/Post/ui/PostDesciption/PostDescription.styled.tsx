import styled from 'styled-components'

export const PostDescriptionWrapper = styled.div`
    display: flex;
    gap: 20px;

    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: ${props => props.theme.textColor[100]};
    }

    p {
        margin: 10px 0;
    }
`
