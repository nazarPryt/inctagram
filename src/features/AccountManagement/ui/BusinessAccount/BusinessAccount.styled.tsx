import styled from 'styled-components'

export const BusinessFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .card {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .paymentButtonsBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: end;
        gap: 20px;

        button {
            height: 100%;
            width: 100%;
        }

        img {
            width: 80px;
            object-fit: contain;
            height: 40px;
        }
    }
`
