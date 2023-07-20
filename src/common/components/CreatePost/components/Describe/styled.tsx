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
    }

    div {
        label {
            top: -20px;
        }

        textarea {
            background-color: #171717;
        }
    }
`
export const AvatarWrapper = styled.div`
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 50%;
    background-color: #1fe55c;
`
