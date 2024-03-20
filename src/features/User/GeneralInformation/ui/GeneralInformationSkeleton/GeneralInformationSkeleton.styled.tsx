import styled from 'styled-components'

export const GeneralInformationSkeletonStyled = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding: 20px;

    .avatarBox {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form {
        flex: 1;

        div {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
`
