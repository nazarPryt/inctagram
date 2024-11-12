import {typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const MobileMyPaymentsTableStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 90%;

    table {
        background-color: ${props => props.theme.bodyColor['300']};
        border: 1px solid ${props => props.theme.bodyColor['100']};
        display: flex;
        justify-content: space-between;
        padding: 15px 15px;
    }

    tbody,
    thead > tr {
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: space-between;
    }
    thead > tr {
        align-items: flex-start;
        text-align: left;
        ${typography.regular_text_14}
    }
    tr {
        display: flex;
        justify-content: end;
    }
    td {
        text-align: right;
    }
`
