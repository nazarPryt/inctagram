import {breakpoints} from '@/shared/styles/Breakpoints'
import styled from 'styled-components'

export const ChatStyled = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;

    @media (max-width: ${breakpoints.pc}px) {
        flex: 3;
    }
`
