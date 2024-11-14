import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const RegistrationModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;

    span {
        color: ${props => props.theme.palette.success['100']};
        ${typography.H2}
    }
`
