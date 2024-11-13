import {breakpoints} from '@/shared/styles/Breakpoints'
import styled from 'styled-components'

export const AllPostsListStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px;
    justify-items: center;
    gap: 20px;

    .infiniteScrollWrapper {
        display: flex;
        flex-direction: column;
        //align-items: center; //todo place center
        overflow: auto;
        width: 100%;
    }

    @media (max-width: ${breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`
