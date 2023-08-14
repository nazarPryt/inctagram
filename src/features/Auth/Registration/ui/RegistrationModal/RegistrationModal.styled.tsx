import styled from 'styled-components'

export const RegistrationModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;

    span {
        color: ${props => props.theme.palette.success['100']};
        font-weight: bold;
        font-size: 20px;
    }
`
