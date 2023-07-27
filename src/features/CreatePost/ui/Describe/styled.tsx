import styled from 'styled-components'

export const DescribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 290px;

    .headerBlock {
        display: flex;
        align-items: center;
        gap: 20px;

        span {
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
        }

        .userNameWrapper {
            display: flex;

            svg {
                width: 100%;
                height: 100%;
            }
        }
    }

    div {
        label {
            top: -20px;
        }

        textarea {
            background-color: #171717;
            height: 140px;
        }
    }
`
export const AvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    img {
        border-radius: 50%;
    }
`
