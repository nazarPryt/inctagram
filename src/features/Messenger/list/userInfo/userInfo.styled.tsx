import styled from 'styled-components'

export const UserInfoStyled = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .icons {
        display: flex;
        gap: 20px;

        img {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }
`
