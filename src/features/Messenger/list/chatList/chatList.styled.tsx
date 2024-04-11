import styled from 'styled-components'

export const ChatListStyled = styled.div`
    flex: 1;
    overflow: scroll;
    .search {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;

        .searchBar {
            flex: 1;
            background-color: rgba(17, 25, 40, 0.5);
            display: flex;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            padding: 10px;

            input {
                background-color: transparent;
                border: none;
                outline: none;
                color: white;
                flex: 1;
            }

            img {
                width: 20px;
                height: 20px;
            }
        }

        .add {
            width: 36px;
            height: 36px;
            background-color: rgba(17, 25, 40, 0.5);
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
        }
    }

    .item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;
        cursor: pointer;
        border-bottom: 1px solid #dddddd35;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }

        .texts {
            display: flex;
            flex-direction: column;
            gap: 10px;

            span {
                font-weight: 500;
            }

            p {
                font-size: 14px;
                font-weight: 300;
            }
        }
    }
`
