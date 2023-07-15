import styled from 'styled-components'

export const PostHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        a {
            position: relative;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            color: ${props => props.theme.textColor};
        }
        a:after {
            content: '';
            position: absolute;
            top: 5px;
            right: -15px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: ${props => props.theme.textColor};
        }
    }
`
